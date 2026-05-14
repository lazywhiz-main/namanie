import { getArticleListEntries } from "@/lib/articles";
import { ArticleRow } from "@/components/ArticleRow";
import { ArticleCluster } from "@/components/ArticleCluster";
import { RevealSection } from "@/components/RevealSection";

export default function ArticlesPage() {
  const entries = getArticleListEntries();

  return (
    <div className="min-h-screen">
      <div className="px-4 pt-10 pb-2 sm:px-6 md:px-[100px] md:pt-14 md:pb-3 text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-[var(--namanie-dim)]">
        Articles
      </div>
      <RevealSection className="px-4 pb-16 sm:px-6 md:px-[100px] md:pb-24">
        {entries.length > 0 ? (
          entries.map((entry, i) =>
            entry.kind === "cluster" ? (
              <ArticleCluster
                key={entry.hub.slug}
                hub={entry.hub}
                children={entry.children}
                index={i}
              />
            ) : (
              <ArticleRow key={entry.article.slug} article={entry.article} index={i} />
            )
          )
        ) : (
          <div className="py-9 border-b border-[var(--namanie-border)] text-[var(--namanie-dim)]">
            記事はまだありません。
          </div>
        )}
      </RevealSection>
    </div>
  );
}
