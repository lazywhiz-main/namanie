"use client";

import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { formatArticleDate } from "@/lib/articleDate";

interface ArticleRowProps {
  article: ArticleMeta;
  index: number;
}

export function ArticleRow({ article, index }: ArticleRowProps) {
  const num = String(index + 1).padStart(2, "0");
  const dateFormatted = formatArticleDate(article.date);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group article-row grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-x-4 gap-y-1 md:gap-x-10 md:gap-y-0 items-baseline py-6 md:py-9 border-b border-[var(--namanie-border)] opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2 md:hover:pl-4 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-serif text-xs md:text-sm font-light text-[var(--namanie-dim)] transition-colors duration-300 group-hover:text-[var(--namanie-red)]">
        {num}
      </div>
      <h3 className="font-serif text-base md:text-xl font-bold leading-[1.6] md:leading-[1.7] transition-colors duration-300 group-hover:text-[var(--namanie-red)] min-w-0">
        {article.title}
        <span className="ml-1.5 md:ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--namanie-red)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 align-middle shrink-0" />
      </h3>
      <div className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 text-right text-[11px] md:text-xs text-[var(--namanie-dim)] leading-[1.6] md:leading-[1.8] whitespace-nowrap">
        {dateFormatted}
        <br />
        {article.author}
      </div>
    </Link>
  );
}

const rowTransitionList =
  "opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2 md:hover:pl-4 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0";

const dateBlock =
  "col-start-2 row-start-2 md:col-start-3 md:row-start-1 text-right text-[11px] md:text-xs text-[var(--namanie-dim)] leading-[1.6] md:leading-[1.8] whitespace-nowrap";

export interface ArticleIndentedRowProps {
  article: ArticleMeta;
  /** 一覧ブロック内の親と同じ index（Reveal 遅延の基準） */
  blockIndex: number;
  /** 子の並び（遅延に加算） */
  childIndex: number;
}

/**
 * 案 C：子行だけ右へずらし（margin ＋薄い左縁）、タイトルは一段小さく。
 * 親行（ArticleRow）と同じ列グリッドを保つ。
 */
export function ArticleIndentedRow({ article, blockIndex, childIndex }: ArticleIndentedRowProps) {
  const dateFormatted = formatArticleDate(article.date);
  const delayMs = blockIndex * 100 + (childIndex + 1) * 45;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`group article-row grid min-w-0 grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-x-4 gap-y-1 md:gap-x-10 md:gap-y-0 items-baseline border-b border-[var(--namanie-border)] py-6 md:py-9 ml-3 border-l border-[rgba(17,17,17,0.06)] pl-1 md:ml-5 md:pl-2 ${rowTransitionList}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div
        className="relative min-h-[1.25em] min-w-0 border-l-2 border-[rgba(185,28,28,0.22)] pl-2"
        aria-hidden="true"
      />
      <h3 className="min-w-0 pl-1 font-serif text-sm font-semibold leading-[1.55] text-[rgba(17,17,17,0.88)] transition-colors duration-300 group-hover:text-[var(--namanie-red)] md:text-[17px] md:leading-[1.65]">
        {article.title}
        <span className="ml-1.5 md:ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--namanie-red)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 align-middle shrink-0" />
      </h3>
      <div className={dateBlock}>
        {dateFormatted}
        <br />
        {article.author}
      </div>
    </Link>
  );
}
