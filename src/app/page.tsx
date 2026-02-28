import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { Hero } from "@/components/Hero";
import { ArticleRow } from "@/components/ArticleRow";
import { RevealSection } from "@/components/RevealSection";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="h-px w-8 md:w-10 bg-[var(--namanie-red)] opacity-30" />
      </div>
      <div className="px-4 pb-16 pt-2 sm:px-6 md:px-[100px] md:pb-24 md:pt-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Latest
      </div>
      <RevealSection className="px-4 pb-16 sm:px-6 md:px-[100px] md:pb-24">
        {articles.length > 0 ? (
          articles.map((article, i) => (
            <ArticleRow key={article.slug} article={article} index={i} />
          ))
        ) : (
          <div className="py-9 border-b border-[var(--namanie-border)] text-[var(--namanie-dim)]">
            記事はまだありません。
          </div>
        )}
      </RevealSection>
    </div>
  );
}
