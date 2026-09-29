# hono-workers

HonoX を使った Cloudflare Workers 向けのサンプルアプリケーションです。トップページではクエリ文字列 `name` を使った挨拶と、カウンターを表示します。

## 公開 URL

https://hono-workers.shingo1551.workers.dev

## 必要な環境

- Node.js
- npm

## 開発

```sh
npm install
npm run dev
```

Vite の開発サーバーが起動します。

## コマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | クライアントと Worker をビルド |
| `npm test` | Vitest のテストを実行 |
| `npm run test:coverage` | カバレッジ付きでテストを実行 |
| `npm run preview` | Wrangler でローカルプレビュー |
| `npm run deploy` | ビルドして Cloudflare Workers にデプロイ |

## デプロイ

Cloudflare にログインし、プロジェクトの依存関係をインストールしたうえで実行します。

```sh
npm run deploy
```

Worker の設定は [`wrangler.jsonc`](./wrangler.jsonc) にあります。
