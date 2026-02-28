import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { ArticleRow } from "@/components/ArticleRow";
import { RevealSection } from "@/components/RevealSection";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      <div className="px-4 pt-10 pb-2 sm:px-6 md:px-[100px] md:pt-14 md:pb-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Articles
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
