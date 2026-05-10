import fs from "fs";

function decodeEntities(html) {
  return html.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function extractBodyText(htmlPath) {
  const html = fs.readFileSync(htmlPath, "utf-8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  let decoded = decodeEntities(body);
  decoded = decoded
    .replace(/&hellip;/g, "…")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"');
  // Strip all tags and collapse whitespace inside text nodes; keep img src for later
  const out = decoded
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, "\n[IMAGE:$1]\n")
    .replace(/<p[^>]*>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<h1[^>]*>/gi, "\n## ")
    .replace(/<h2[^>]*>/gi, "\n## ")
    .replace(/<h3[^>]*>/gi, "\n### ")
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s+|\s+$/gm, "")
    .trim();
  return out;
}

const path = process.argv[2];
if (path) {
  console.log(extractBodyText(path));
}
