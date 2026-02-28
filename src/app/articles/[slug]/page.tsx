import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { ArticleBody } from "@/components/ArticleBody";

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

  return (
    <article className="max-w-[640px] mx-auto px-6 py-20 md:px-10 pb-[120px]">
      <Link
        href="/"
        className="mb-15 inline-block text-xs text-[var(--namanie-red)] transition-transform duration-300 hover:-translate-x-2"
      >
        ← 戻る
      </Link>
      <h1 className="font-serif text-[32px] font-black leading-[1.7] mb-5">
        {article.meta.title}
      </h1>
      <div className="flex gap-5 text-xs text-[var(--namanie-dim)] mb-12 pb-8 border-b border-[var(--namanie-border)]">
        <span>{article.meta.author}</span>
        <span>{dateFormatted}</span>
        <span>~{article.meta.readMinutes} min</span>
      </div>
      <ArticleBody content={article.content} />
    </article>
  );
}
