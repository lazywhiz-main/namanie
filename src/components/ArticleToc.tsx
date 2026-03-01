"use client";

interface HeadingItem {
  level: 2 | 3;
  text: string;
  id: string;
}

interface ArticleTocProps {
  headings: HeadingItem[];
}

/** 記事の目次（見出しリンク） */
export function ArticleToc({ headings }: ArticleTocProps) {
  if (headings.length === 0) return null;

  return (
    <nav
      className="mb-8 md:mb-10 p-4 md:p-5 rounded-lg bg-[var(--namanie-toc-bg)] border border-[var(--namanie-border)]"
      aria-label="目次"
    >
      <p className="text-[11px] md:text-xs font-medium text-[var(--namanie-dim)] tracking-wider mb-3 md:mb-4">
        目次
      </p>
      <ul className="font-serif text-[13px] md:text-sm leading-[1.8] text-[rgba(17,17,17,0.8)] space-y-1.5 md:space-y-2">
        {headings.map(({ level, text, id }) => (
          <li
            key={id}
            className={level === 3 ? "pl-4 md:pl-5" : ""}
          >
            <a
              href={`#${id}`}
              className="text-[var(--namanie-ink)] no-underline hover:text-[var(--namanie-red)] transition-colors duration-200"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
