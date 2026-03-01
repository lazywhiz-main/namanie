import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles, getHeadingsFromContent, splitArticleAndComments } from "@/lib/articles";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleToc } from "@/components/ArticleToc";
import { ArticleComments } from "@/components/ArticleComments";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const dateFormatted = formatDate(article.meta.date);
  const { mainContent, commentsContent } = splitArticleAndComments(article.content);
  const headings = getHeadingsFromContent(mainContent);
  const headingIds = headings.map((_, i) => `h-${i}`);
  const tocHeadings = headings.map((h, i) => ({ ...h, id: headingIds[i] ?? "" }));

  return (
    <article className="max-w-[640px] mx-auto px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 pb-20 md:pb-[120px]">
      <Link
        href="/"
        className="mb-10 md:mb-15 inline-block text-[11px] md:text-xs text-[var(--namanie-red)] transition-transform duration-300 hover:-translate-x-2 min-h-[44px] flex items-center"
      >
        ← 戻る
      </Link>
      <h1 className="font-serif text-[1.5rem] leading-[1.5] sm:text-2xl sm:leading-[1.6] md:text-[32px] md:leading-[1.7] font-black mb-4 md:mb-5">
        {article.meta.title}
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] md:text-xs text-[var(--namanie-dim)] mb-8 md:mb-12 pb-6 md:pb-8 border-b border-[var(--namanie-border)]">
        <span>{article.meta.author}</span>
        <span>{dateFormatted}</span>
      </div>
      {tocHeadings.length > 0 && <ArticleToc headings={tocHeadings} />}
      <ArticleBody content={mainContent} headingIds={headingIds} />
      {commentsContent && <ArticleComments content={commentsContent} />}
      <Link
        href="/articles"
        className="mt-12 md:mt-16 inline-block text-[11px] md:text-xs text-[var(--namanie-red)] transition-transform duration-300 hover:-translate-x-2 min-h-[44px] flex items-center"
      >
        ← 記事一覧に戻る
      </Link>
    </article>
  );
}
