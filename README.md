# なまにえ

KCA（Art × Business School）の仲間たちが運営する Web メディア。「生のまま、差し出す。」をコンセプトにした編集メディアです。

- **デザイン**: Pattern N3 — Minimal Unease（Noto Serif JP + Inter、赤アクセント）
- **技術**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Markdown（gray-matter）
- **ホスティング**: Vercel 想定（記事更新ごとにビルドし直す運用）

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 本番ビルド
```

**`Cannot find module './626.js'` などチャンク参照エラーが出る場合**  
Next の dev キャッシュ不整合が原因のことがあります。`.next` を削除してから再起動してください。

```bash
rm -rf .next && npm run dev
```

## 記事の追加

`content/articles/` に Markdown ファイル（`.md`）を追加する。

**frontmatter 例:**

```yaml
---
title: "記事タイトル"
slug: "url-slug"       # 省略時はファイル名
author: "著者名"
date: "2025-01-01"
excerpt: "一覧用の短い説明（任意）"
readMinutes: 8         # 省略時は本文から自動算出
---
```

本文は Markdown（見出し・段落・引用・リスト・画像）で記述。画像は **原本を `docs/images/` に置き**、`npm run copy-article-images` で `public/articles/2025/` へコピーするか、手動で `public/articles/{slug}/` に配置する。本文では `![alt](/articles/2025/xxx.png)` のように参照する。

## 構成

- `src/app/` — ページ（トップ・記事一覧・記事詳細・About（Contributors 含む）・Contact）
- `src/components/` — Nav, Footer, Hero, ArticleRow, ArticleBody, RedDot, RevealSection
- `src/lib/articles.ts` — 記事取得（getAllArticles, getArticleBySlug）
- `src/data/writers.ts` — 執筆者一覧
- `content/articles/` — 記事 Markdown

## デプロイ（Vercel）

リポジトリを Vercel に連携し、`main` ブランチの push で自動デプロイ。ビルドコマンドは `npm run build`、出力は `.next`（Next.js のデフォルト）。
