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
