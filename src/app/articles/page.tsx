import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { ArticleRow } from "@/components/ArticleRow";
import { RevealSection } from "@/components/RevealSection";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      <div className="px-6 pt-14 pb-3 md:px-[100px] text-[10px] tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Articles
      </div>
      <RevealSection className="px-6 pb-24 md:px-[100px]">
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
