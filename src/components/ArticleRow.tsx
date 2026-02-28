"use client";

import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

interface ArticleRowProps {
  article: ArticleMeta;
  index: number;
}

export function ArticleRow({ article, index }: ArticleRowProps) {
  const num = String(index + 1).padStart(2, "0");
  const dateFormatted = formatDate(article.date);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group article-row grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-x-4 gap-y-1 md:gap-x-10 md:gap-y-0 items-baseline py-6 md:py-9 border-b border-[var(--namanie-border)] opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2 md:hover:pl-4 [.in-view>&]:opacity-100 [.in-view>&]:translate-y-0"
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
