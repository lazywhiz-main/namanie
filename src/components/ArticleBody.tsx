"use client";

import { useRef } from "react";
import ReactMarkdown from "react-markdown";

interface ArticleBodyProps {
  content: string;
  /** 見出しに付与する id（出現順）。目次・アンカーリンク用 */
  headingIds?: string[];
}

/** 記事本文用の Markdown レンダラ（N3 スタイル） */
export function ArticleBody({ content, headingIds = [] }: ArticleBodyProps) {
  const headingIndexRef = useRef(0);

  const nextHeadingId = () => {
    const id = headingIds[headingIndexRef.current] ?? "";
    headingIndexRef.current += 1;
    return id;
  };

  return (
    <div className="article-body font-serif text-[14px] md:text-[15px] leading-[2.2] md:leading-[2.4] text-[rgba(17,17,17,0.8)] [&>p]:mb-4 md:[&>p]:mb-6 [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-2 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:leading-[0.85] [&>p:first-of-type]:first-letter:text-[var(--namanie-red)] [&>p:first-of-type]:first-letter:font-black [&>blockquote]:my-6 [&>blockquote]:py-4 [&>blockquote]:pl-5 [&>blockquote]:md:my-9 [&>blockquote]:md:py-6 [&>blockquote]:md:pl-7 [&>blockquote]:border-l-2 [&>blockquote]:border-[var(--namanie-red)] [&>blockquote]:font-serif [&>blockquote]:italic [&>blockquote]:text-[13px] [&>blockquote]:md:text-sm [&>blockquote]:leading-[2.1] [&>blockquote]:md:leading-[2.2] [&>blockquote]:text-[rgba(17,17,17,0.55)] [&_h2]:font-serif [&_h2]:text-lg [&_h2]:md:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:md:mt-12 [&_h2]:md:mb-4 [&_h2]:leading-[1.6] [&_h2]:text-[var(--namanie-ink)] [&_h2:first-of-type]:mt-0 [&_h3]:font-serif [&_h3]:text-[15px] [&_h3]:md:text-base [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:md:mt-8 [&_h3]:md:mb-3 [&_h4]:font-serif [&_h4]:text-[15px] [&_h4]:md:text-base [&_h4]:font-bold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:md:mt-8 [&_h4]:md:mb-3 [&_img]:max-w-full [&_img]:h-auto [&_img]:block [&_img]:my-4 [&_img]:md:my-6 [&_img]:border [&_img]:border-[var(--namanie-border)] [&_ul]:my-4 [&_ul]:md:my-5 [&_ul]:font-serif [&_ul]:text-[14px] [&_ul]:md:text-[15px] [&_ul]:leading-[1.95] [&_ul]:md:leading-[2] [&_ol]:my-4 [&_ol]:md:my-5 [&_ol]:font-serif [&_ol]:text-[14px] [&_ol]:md:text-[15px] [&_ol]:leading-[1.95] [&_ol]:md:leading-[2] [&_li]:mb-1.5 [&_li]:md:mb-2 [&_hr]:border-none [&_hr]:border-t [&_hr]:border-[var(--namanie-border)] [&_hr]:my-6 [&_hr]:md:my-8 [&_a]:text-[var(--namanie-red)] [&_a]:underline [&_a:hover]:no-underline">
      <ReactMarkdown
        components={{
          h2: ({ children }) => {
            const id = nextHeadingId();
            return <h2 id={id}>{children}</h2>;
          },
          h3: ({ children }) => {
            const id = nextHeadingId();
            return <h3 id={id}>{children}</h3>;
          },
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <span className="block my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt ?? ""}
                  className="w-full h-auto border border-[var(--namanie-border)]"
                />
                {alt && (
                  <span className="block mt-2 text-xs text-[var(--namanie-dim)]">
                    {alt}
                  </span>
                )}
              </span>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
