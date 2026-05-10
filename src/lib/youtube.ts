/** youtu.be / youtube.com の URL から動画 ID を取り出す（失敗時は null） */
export function parseYoutubeVideoId(raw: string): string | null {
  const trimmed = raw.trim();
  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.replace(/^\//, "").split("/")[0] ?? "";
      return /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      const v = url.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.slice("/embed/".length).split("/")[0] ?? "";
        return /^[\w-]{11}$/.test(id) ? id : null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.slice("/shorts/".length).split("/")[0] ?? "";
        return /^[\w-]{11}$/.test(id) ? id : null;
      }
    }

    return null;
  } catch {
    return null;
  }
}
