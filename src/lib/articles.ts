import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * 記事の frontmatter スキーマ（将来 CMS フィールドと対応可能）
 */
export interface ArticleMeta {
  title: string;
  slug: string;
  author: string;
  authorId?: string;
  date: string;
  readMinutes?: number;
  /** 一覧用短い説明（任意） */
  excerpt?: string;
  /**
   * この記事がぶら下がる塊の入り口記事の slug。
   * 未設定のときは単独、または他稿の parentSlug 先として塊の先頭行になる。
   */
  parentSlug?: string;
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

export type ArticleListEntry =
  | { kind: "cluster"; hub: ArticleMeta; children: ArticleMeta[]; sortKey: string }
  | { kind: "flat"; article: ArticleMeta; sortKey: string };

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readParentSlug(data: Record<string, unknown>): string | undefined {
  const v = data.parentSlug ?? data.parent_slug;
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

function getArticleFilePaths(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
}

/** 読了時間を文字数から概算（日本語想定: 約600字/分） */
export function estimateReadMinutes(content: string): number {
  const len = content.replace(/\s/g, "").length;
  return Math.max(1, Math.round(len / 600));
}

/** 「以下コメント」の行（# / ## や ** の有無を問わない）で本文とコメントを分割 */
export function splitArticleAndComments(content: string): { mainContent: string; commentsContent: string | null } {
  const lines = content.split(/\r?\n/);
  const markerRe = /^#+\s*\*?\*?以下コメント\*?\*?\s*$/;
  let splitIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (markerRe.test(lines[i].trim())) {
      splitIndex = i;
      break;
    }
  }
  if (splitIndex === -1) return { mainContent: content, commentsContent: null };
  const mainContent = lines.slice(0, splitIndex).join("\n").trimEnd();
  const commentsContent = lines
    .slice(splitIndex + 1)
    .join("\n")
    .trim();
  return { mainContent, commentsContent: commentsContent || null };
}

/** 見出しテキストから目次用に Markdown の装飾（** など）を除去 */
function stripHeadingMarkdown(text: string): string {
  let s = text.trim();
  if (s.startsWith("**") && s.endsWith("**")) s = s.slice(2, -2).trim();
  if (s.startsWith("*") && s.endsWith("*") && !s.includes("**")) s = s.slice(1, -1).trim();
  return s;
}

/** 記事本文から見出し（## / ###）を出現順に抽出（目次用） */
export function getHeadingsFromContent(content: string): { level: 2 | 3; text: string }[] {
  const headings: { level: 2 | 3; text: string }[] = [];
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const h3 = line.match(/^### (.+)$/);
    const h2 = line.match(/^## (.+)$/);
    if (h3) headings.push({ level: 3, text: stripHeadingMarkdown(h3[1]) });
    else if (h2) headings.push({ level: 2, text: stripHeadingMarkdown(h2[1]) });
  }
  return headings;
}

export function getAllArticles(): ArticleMeta[] {
  const paths = getArticleFilePaths();
  const articles: ArticleMeta[] = [];
  for (const filePath of paths) {
    const fullPath = path.join(ARTICLES_DIR, filePath);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const readMinutes =
      data.readMinutes ?? estimateReadMinutes(content);
    articles.push({
      title: data.title,
      slug: data.slug ?? path.basename(filePath, ".md"),
      author: data.author,
      authorId: data.authorId,
      date: data.date,
      readMinutes,
      excerpt: data.excerpt,
      parentSlug: readParentSlug(data as Record<string, unknown>),
    });
  }
  articles.sort((a, b) => (b.date > a.date ? 1 : -1));
  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const paths = getArticleFilePaths();
  for (const filePath of paths) {
    const fullPath = path.join(ARTICLES_DIR, filePath);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const s = data.slug ?? path.basename(filePath, ".md");
    if (s === slug) {
      const readMinutes = data.readMinutes ?? estimateReadMinutes(content);
      return {
        meta: {
          title: data.title,
          slug: s,
          author: data.author,
          authorId: data.authorId,
          date: data.date,
          readMinutes,
          excerpt: data.excerpt,
          parentSlug: readParentSlug(data as Record<string, unknown>),
        },
        content,
      };
    }
  }
  return null;
}

function isChildInValidCluster(meta: ArticleMeta, bySlug: Map<string, ArticleMeta>): boolean {
  return Boolean(meta.parentSlug && bySlug.has(meta.parentSlug));
}

function maxIsoDate(...dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b));
}

/**
 * 一覧・トップ用：親子塊は1クラスタ、それ以外はフラット1行。日付の新しい順。
 */
export function getArticleListEntries(): ArticleListEntry[] {
  const articles = getAllArticles();
  const bySlug = new Map(articles.map((a) => [a.slug, a]));
  const consumed = new Set<string>();
  const entries: ArticleListEntry[] = [];

  for (const hub of articles) {
    if (isChildInValidCluster(hub, bySlug)) continue;
    const children = articles
      .filter((c) => c.parentSlug === hub.slug)
      .sort((a, b) => (b.date > a.date ? 1 : -1));
    if (children.length === 0) continue;
    consumed.add(hub.slug);
    for (const c of children) consumed.add(c.slug);
    const sortKey = maxIsoDate(hub.date, ...children.map((c) => c.date));
    entries.push({ kind: "cluster", hub, children, sortKey });
  }

  for (const article of articles) {
    if (consumed.has(article.slug)) continue;
    entries.push({ kind: "flat", article, sortKey: article.date });
  }

  entries.sort((a, b) => (b.sortKey > a.sortKey ? 1 : -1));
  return entries;
}

export type ArticleClusterData = {
  hub: ArticleMeta;
  children: ArticleMeta[];
};

/**
 * 記事詳細用：slug が属する塊（入り口＋インデント行）。属さないときは null。
 */
export function getArticleClusterForSlug(slug: string): ArticleClusterData | null {
  const articles = getAllArticles();
  const bySlug = new Map(articles.map((a) => [a.slug, a]));
  const current = bySlug.get(slug);
  if (!current) return null;

  if (isChildInValidCluster(current, bySlug)) {
    const hub = bySlug.get(current.parentSlug as string) as ArticleMeta;
    const children = articles
      .filter((c) => c.parentSlug === hub.slug)
      .sort((a, b) => (b.date > a.date ? 1 : -1));
    return { hub, children };
  }

  const children = articles
    .filter((c) => c.parentSlug === current.slug)
    .sort((a, b) => (b.date > a.date ? 1 : -1));
  if (children.length === 0) return null;
  return { hub: current, children };
}
