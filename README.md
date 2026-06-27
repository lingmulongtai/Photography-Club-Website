# KUAS Photography Club Website

京都先端科学大学 写真部の公式リンクハブ兼ポートフォリオLPです。

公開URL: https://kuas-photography-club.vercel.app

## 概要

InstagramプロフィールやQRコードからアクセスすることを想定した、スマホ優先の1ページサイトです。
入部フォーム、撮影会、SNS、連絡先などの主要リンクをまとめつつ、ファインダー演出や3Dカメラ表現で写真部らしい印象を出しています。

## 編集する場所

- `links.json`: 入部フォーム、Instagram、撮影会、問い合わせなどのリンク管理
- `data.js`: 活動紹介とギャラリーの表示データ
- `index.html`: ページ構造、OGP、見出し
- `styles.css`: デザイン、レスポンシブ、アニメーション
- `app.js`: 3D演出、リンク読み込み、ギャラリー操作
- `og-image.jpg`: LINEやSNS共有用のOGP画像

## リンク更新

フォームやSNSのURLを変えるときは `links.json` の `url` を変更します。
`id: "join"` のリンクが、トップと入部セクションの入部ボタンにも反映されます。

```json
{
  "id": "join",
  "title": "Join KUAS Photography Club",
  "url": "https://forms.gle/xxxx"
}
```

## ローカル確認

静的サイトなので、簡易サーバーで確認できます。

```bash
npx serve .
```

または Vercel CLI を使う場合:

```bash
vercel dev
```

## デプロイ

Vercel project: `kuas-photography-club`

```bash
vercel deploy --prod
```
