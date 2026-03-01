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
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function getArticleFilePaths(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
}

/** 読了時間を文字数から概算（日本語想定: 約600字/分） */
export function estimateReadMinutes(content: string): number {
  const len = content.replace(/\s/g, "").length;
  return Math.max(1, Math.round(len / 600));
}

/** 「## 以下コメント」で本文とコメントを分割。コメントが無い場合は commentsContent は null */
export function splitArticleAndComments(content: string): { mainContent: string; commentsContent: string | null } {
  const marker = "\n## 以下コメント\n";
  const idx = content.indexOf(marker);
  if (idx === -1) return { mainContent: content, commentsContent: null };
  return {
    mainContent: content.slice(0, idx).trimEnd(),
    commentsContent: content.slice(idx + marker.length).trim(),
  };
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
        },
        content,
      };
    }
  }
  return null;
}
