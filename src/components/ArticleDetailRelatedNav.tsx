import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { formatArticleDate } from "@/lib/articleDate";

export interface ArticleDetailRelatedNavProps {
  hub: ArticleMeta;
  children: ArticleMeta[];
  currentSlug: string;
}

/**
 * 記事詳細専用：一覧の行グリッドとは別に、角枠＋先頭行＋インデント子のブロック。
 * 一覧の ArticleCluster（ArticleRow 連結）とは独立した UI。
 */
export function ArticleDetailRelatedNav({ hub, children, currentSlug }: ArticleDetailRelatedNavProps) {
  const hubCurrent = currentSlug === hub.slug;

  return (
    <nav
      className="overflow-hidden rounded-[10px] border border-[var(--namanie-border)] bg-[rgba(255,255,255,0.72)]"
      aria-label="この記事の前後関係"
    >
      <div
        className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[var(--namanie-border)] bg-gradient-to-r from-[var(--namanie-toc-bg)] to-[rgba(17,17,17,0.02)] px-3.5 py-3.5 md:px-4 ${
          hubCurrent ? "bg-[rgba(185,28,28,0.07)] shadow-[inset_3px_0_0_0_var(--namanie-red)]" : ""
        }`}
      >
        <span className="min-w-0 flex-[1_1_200px] font-serif text-sm font-semibold leading-snug text-[rgba(17,17,17,0.92)] md:text-[15px]">
          {hubCurrent ? (
            <span aria-current="page">{hub.title}</span>
          ) : (
            <Link
              href={`/articles/${hub.slug}`}
              className="text-inherit no-underline transition-colors hover:text-[var(--namanie-red)]"
            >
              {hub.title}
            </Link>
          )}
        </span>
        <span className="shrink-0 text-[11px] text-[var(--namanie-dim)] md:text-xs">
          {formatArticleDate(hub.date)} · {hub.author}
        </span>
        {hubCurrent ? (
          <span className="shrink-0 text-[10px] font-bold tracking-wide text-[var(--namanie-red)]">表示中</span>
        ) : null}
      </div>
      <ul className="m-0 list-none p-0">
        {children.map((child) => {
          const childCurrent = currentSlug === child.slug;
          return (
            <li
              key={child.slug}
              className={`relative flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[var(--namanie-border)] py-3 pl-6 pr-3.5 last:border-b-0 md:pl-7 md:pr-4 ${
                childCurrent ? "bg-[rgba(185,28,28,0.07)]" : ""
              }`}
            >
              <span
                className={`pointer-events-none absolute left-2.5 top-0 bottom-0 w-[2px] rounded-r-sm md:left-3 ${
                  childCurrent ? "w-[3px] bg-[var(--namanie-red)]" : "bg-[rgba(185,28,28,0.22)]"
                }`}
                aria-hidden
              />
              <span className="min-w-0 flex-[1_1_200px] pl-1 font-serif text-sm font-semibold leading-snug text-[rgba(17,17,17,0.92)] md:text-[15px]">
                {childCurrent ? (
                  <span aria-current="page">{child.title}</span>
                ) : (
                  <Link
                    href={`/articles/${child.slug}`}
                    className="text-inherit no-underline transition-colors hover:text-[var(--namanie-red)]"
                  >
                    {child.title}
                  </Link>
                )}
              </span>
              <span className="shrink-0 text-[11px] text-[var(--namanie-dim)] md:text-xs">
                {formatArticleDate(child.date)} · {child.author}
              </span>
              {childCurrent ? (
                <span className="shrink-0 text-[10px] font-bold tracking-wide text-[var(--namanie-red)]">表示中</span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
