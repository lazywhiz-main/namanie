"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleCommentsProps {
  content: string;
}

/** 「## 名前」＋本文のブロックにパース */
function parseCommentBlocks(content: string): { author: string; body: string }[] {
  const parts = content.split(/\n## /).filter(Boolean);
  return parts.map((block) => {
    const firstBreak = block.indexOf("\n\n");
    if (firstBreak === -1) return { author: block.trim(), body: "" };
    return {
      author: block.slice(0, firstBreak).trim(),
      body: block.slice(firstBreak + 2).trim(),
    };
  });
}

/** 記事の「以下コメント」ブロック用レンダラ（本文と区別したデザイン） */
export function ArticleComments({ content }: ArticleCommentsProps) {
  const blocks = parseCommentBlocks(content);
  if (blocks.length === 0) return null;

  return (
    <section
      className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-[var(--namanie-border)]"
      aria-label="コメント"
    >
      <h2 className="text-[11px] md:text-xs font-medium text-[var(--namanie-dim)] tracking-wider mb-5 md:mb-6">
        コメント
      </h2>
      <div className="space-y-4 md:space-y-5">
        {blocks.map(({ author, body }, i) => (
          <div
            key={i}
            className="rounded-lg border border-[var(--namanie-border)] bg-[var(--namanie-comments-bg)] py-5 md:py-6 px-4 md:px-5"
          >
            <p className="text-[11px] md:text-xs font-normal text-[var(--namanie-dim)] mb-2 tracking-wide">
              {author}
            </p>
            <div className="article-comments-body font-serif text-[13px] md:text-[14px] leading-[2] text-[rgba(17,17,17,0.75)] [&>p]:mb-3 [&>p:last-of-type]:mb-0 [&_ul]:my-3 [&_ol]:my-3 [&_li]:mb-1 [&_a]:text-[var(--namanie-red)] [&_a]:underline [&_a:hover]:no-underline">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
