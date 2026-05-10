"use client";

interface ArticleYoutubeEmbedProps {
  videoId: string;
  title?: string;
}

/** 記事本文用：16:9・細い枠線で N3 トーンに寄せた YouTube 埋め込み */
export function ArticleYoutubeEmbed({
  videoId,
  title = "YouTube動画",
}: ArticleYoutubeEmbedProps) {
  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`;

  return (
    <figure className="my-8 md:my-10">
      <div className="overflow-hidden rounded-lg border border-[var(--namanie-border)] bg-[rgba(17,17,17,0.03)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
      <figcaption className="mt-2 text-[11px] md:text-xs text-[var(--namanie-dim)] tracking-wide">
        参照動画（YouTube）
      </figcaption>
    </figure>
  );
}
