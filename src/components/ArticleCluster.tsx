import type { ArticleMeta } from "@/lib/articles";
import { ArticleRow, ArticleIndentedRow } from "@/components/ArticleRow";

export interface ArticleClusterProps {
  hub: ArticleMeta;
  children: ArticleMeta[];
  /** RevealSection 内の出現順（親行の番号・アニメーション用） */
  index?: number;
}

/** 記事一覧・トップのみ：親は ArticleRow、子はインデント行。 */
export function ArticleCluster({ hub, children, index = 0 }: ArticleClusterProps) {
  return (
    <nav aria-label="関連する記事">
      <ArticleRow article={hub} index={index} />
      {children.map((child, ci) => (
        <ArticleIndentedRow key={child.slug} article={child} blockIndex={index} childIndex={ci} />
      ))}
    </nav>
  );
}
