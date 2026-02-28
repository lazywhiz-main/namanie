import ReactMarkdown from "react-markdown";

interface ArticleBodyProps {
  content: string;
}

/** 記事本文用の Markdown レンダラ（N3 スタイル） */
export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-body font-serif text-[15px] leading-[2.4] text-[rgba(17,17,17,0.8)] [&>p]:mb-6 [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-2.5 [&>p:first-of-type]:first-letter:mt-1.5 [&>p:first-of-type]:first-letter:text-[3.5em] [&>p:first-of-type]:first-letter:leading-[0.85] [&>p:first-of-type]:first-letter:text-[var(--namanie-red)] [&>p:first-of-type]:first-letter:font-black [&>blockquote]:my-9 [&>blockquote]:py-6 [&>blockquote]:pl-7 [&>blockquote]:border-l-2 [&>blockquote]:border-[var(--namanie-red)] [&>blockquote]:font-serif [&>blockquote]:italic [&>blockquote]:text-sm [&>blockquote]:leading-[2.2] [&>blockquote]:text-[rgba(17,17,17,0.55)] [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-[1.6] [&_h2]:text-[var(--namanie-ink)] [&_h2:first-of-type]:mt-0 [&_h3]:font-serif [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:font-serif [&_h4]:text-base [&_h4]:font-bold [&_h4]:mt-8 [&_h4]:mb-3 [&_img]:max-w-full [&_img]:h-auto [&_img]:block [&_img]:my-6 [&_img]:border [&_img]:border-[var(--namanie-border)] [&_ul]:my-5 [&_ul]:pl-6 [&_ul]:font-serif [&_ul]:text-[15px] [&_ul]:leading-[2] [&_li]:mb-2 [&_hr]:border-none [&_hr]:border-t [&_hr]:border-[var(--namanie-border)] [&_hr]:my-8">
      <ReactMarkdown
        components={{
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
