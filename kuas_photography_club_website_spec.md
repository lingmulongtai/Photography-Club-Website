# KUAS Photography Club Website / Interactive Landing Page 仕様書

## 1. プロジェクト概要

京都先端科学大学 写真部（KUAS Photography Club）の公式Webサイトを制作する。

このWebサイトは、単なる部活紹介ページではなく、InstagramプロフィールやQRコードからアクセスする「写真部の中心ハブ」として機能する。  
現在、入部フォーム・イベント参加フォーム・撮影会案内・SNSリンクなどを毎回Google Formsや個別リンクで共有しているが、それらを1つのWebサイトに集約し、リンク更新の手間を減らす。

また、写真部は工学部の学生が運営しているため、Webサイト自体を「技術力の見える作品」として見せたい。  
3D表現、カメラのファインダー演出、スクロールアニメーション、ギャラリー演出などを多く取り入れ、初見で印象に残るランディングページにする。

現段階では機能の完成度よりも、見た目・演出・世界観を優先する。  
一部の機能はダミーやハリボテでも構わない。

---

## 2. サイトの目的

### 主目的

- Instagramのプロフィールリンクとして使える、写真部公式リンクハブを作る
- 入部フォーム、イベント参加フォーム、撮影会案内、SNS、活動紹介を1か所にまとめる
- Google FormsやQRコードのリンクを毎回張り替えなくても、Webサイト側の更新だけで済むようにする
- 初めて見た人に「写真部すごい」「デザインかっこいい」「工学部っぽい」と思わせる
- 写真部のブランディングを強化する

### 優先順位

1. 見た目のインパクト
2. アニメーション・3D・インタラクション
3. 写真部らしい雰囲気
4. Instagramから来た人が必要なリンクにアクセスできること
5. 将来的な管理しやすさ

使いやすさよりも、まずは「見た瞬間に印象に残るデザイン」を優先する。

---

## 3. ターゲットユーザー

### メインターゲット

- KUASの新入生
- 写真部に興味がある学生
- Instagramからアクセスする学生
- 撮影会やイベントに参加したい学生

### サブターゲット

- 大学関係者
- オープンキャンパス関係者
- 他クラブ・他大学の学生
- 写真部の活動を知りたい人

---

## 4. 全体コンセプト

## “Enter the Viewfinder”

サイトを開くと、ユーザーがカメラのファインダーをのぞき込むような演出から始まる。

最初は暗い画面、レンズの絞り、フォーカス音、シャッターのような演出が入り、徐々に写真部の世界が見えてくる。  
Webサイト全体を「カメラを通して大学生活を切り取る体験」として設計する。

写真部のサイトでありながら、単なる写真ギャラリーではなく、インタラクティブなWeb作品として成立させる。

---

## 5. デザイン方針

### キーワード

- cinematic
- interactive
- viewfinder
- camera UI
- dark mode
- glassmorphism
- 3D camera object
- shutter animation
- film grain
- lens flare
- floating photos
- modern portfolio
- engineering × photography
- premium
- emotional
- immersive

### 雰囲気

全体的には黒・白・グレーを基調にしたダークで高級感のあるデザイン。  
アクセントカラーとして、オレンジ・シアン・赤などを少量使う。  
写真・カメラ・光・ファインダーを感じるUIにする。

大学のクラブサイトっぽい素朴な雰囲気ではなく、クリエイティブスタジオやデジタルアート作品のような雰囲気を目指す。

---

## 6. ページ構成

基本は1ページ完結型のランディングページにする。  
Instagramのリンクから来ることを想定し、スマホでも見られるようにする。

### セクション構成

1. Opening / Viewfinder Intro
2. Hero Section
3. Quick Links / Linktree Area
4. About Photography Club
5. Featured Activities
6. Interactive Gallery
7. Join Us / Recruitment
8. Forms & Important Links
9. SNS / Footer

---

## 7. Opening / Viewfinder Intro

### 目的

最初にアクセスした瞬間、「普通の部活サイトではない」と感じさせる。

### 演出案

- 黒い画面から開始
- 中央にカメラのファインダー枠が表示される
- ピントが合うようなブラー解除アニメーション
- シャッター音を想起させる一瞬のフラッシュ表現
- “KUAS Photography Club” の文字がファインダー内に表示される
- レンズの絞りが開くように画面全体へ展開
- そのままHero Sectionへシームレスに移行

### 表示テキスト案

```text
Focus on the moment.
Capture the campus.
KUAS Photography Club
```

または

```text
Look through the viewfinder.
This is KUAS Photography Club.
```

### 技術的なイメージ

- CSSアニメーション
- SVGのファインダー枠
- ブラー・グロー・フラッシュ表現
- Three.js / React Three Fiber等による3Dレンズ表現
- ローディング演出としても使える

---

## 8. Hero Section

### 目的

写真部の第一印象を決めるメインビジュアル。

### 内容

- 大きなタイトル
- 写真部の短いキャッチコピー
- 3Dカメラまたはレンズのオブジェクト
- 背景に浮遊する写真カード
- CTAボタン

### 表示テキスト案

```text
KUAS Photography Club
Capture. Create. Connect.
```

説明文：

```text
We are a student photography club at Kyoto University of Advanced Science.
We capture campus life, city moments, travel, portraits, events, and everything in between.
```

日本語版：

```text
京都先端科学大学 写真部です。
日常、キャンパス、街、旅、ポートレート、イベント。
それぞれの視点で、今しかない瞬間を残しています。
```

### CTAボタン

- Join the Club
- View Gallery
- Instagram
- Event Forms

---

## 9. Quick Links / Linktree Area

### 目的

Instagramプロフィールリンクとして実用的に使うための中心機能。

### 機能

リンクカードを縦またはグリッドで表示する。  
各リンクは管理者が簡単に差し替えられる構造にする。

### 掲載リンク例

- 入部フォーム
- 新入生歓迎会 参加フォーム
- 撮影会 参加フォーム
- Instagram
- Google Drive / 写真共有
- 活動予定
- お問い合わせ
- 部員向け連絡リンク

### デザイン

普通のLinktree風ではなく、写真カードやカメラUIのようなデザインにする。

リンクカードには以下のような演出を入れる。

- ホバーで写真が少し傾く
- カードにライトが反射する
- クリック時にシャッターのようなアニメーション
- 重要なリンクは“LIVE”や“OPEN”のようなラベルを付ける
- フォームリンクは目立つようにする

### データ構造案

リンク情報はコード内の配列やJSONで管理する。

例：

```js
const links = [
  {
    title: "Join KUAS Photography Club",
    description: "入部希望はこちら",
    url: "https://forms.gle/xxxx",
    tag: "OPEN",
    priority: true
  },
  {
    title: "June Photo Walk",
    description: "6月撮影会 参加フォーム",
    url: "https://forms.gle/xxxx",
    tag: "EVENT",
    priority: false
  }
]
```

将来的には管理画面やCMSから更新できるようにしてもよい。

---

## 10. About Section

### 目的

写真部がどんなクラブかを短く伝える。

### 内容

- KUAS Photography Clubの紹介
- 初心者歓迎
- スマホ・カメラどちらでもOK
- 撮影会、展示、大学イベント撮影などを行っている
- 国際学生も参加しやすい雰囲気
- 技術・デザイン・写真が好きな人が集まれる場所

### 表示文案

```text
KUAS Photography Club is a creative community for students who love photography, cameras, design, and visual storytelling.

You do not need an expensive camera.
You do not need professional skills.
All you need is curiosity and your own way of seeing the world.
```

日本語版：

```text
KUAS Photography Clubは、写真・カメラ・デザイン・表現が好きな学生のためのクラブです。

高いカメラや専門的な知識がなくても大丈夫です。
スマホでも、一眼でも、初心者でも歓迎します。
大切なのは、自分の視点で世界を見ることです。
```

---

## 11. Featured Activities Section

### 目的

写真部の活動内容をビジュアルで見せる。

### 表示する活動例

- Photo Walk
- Campus Shooting
- Portrait Shooting
- Event Photography
- Exhibition
- Open Campus Shooting
- Festival Booth
- Editing / Lightroom
- Camera Sharing

### デザイン

活動カードを横スクロールまたは3Dカルーセルで表示する。

カードには写真、タイトル、短い説明を入れる。  
ホバーまたはタップでカードが奥行きを持って動く。

### 活動カード例

```text
Photo Walk
Kyoto, Osaka, campus, and hidden local spots.
```

```text
Event Photography
We capture university events, open campus, and student activities.
```

```text
Gallery & Exhibition
We share our work online and through campus exhibitions.
```

---

## 12. Interactive Gallery

### 目的

写真部らしさを最も強く見せる場所。

### 機能

- 写真をグリッド表示
- 写真をクリックすると拡大表示
- カテゴリフィルター
- 横スクロールギャラリー
- 3D空間に写真が浮いているような演出
- マウスやスマホの傾きに反応して写真が少し動く

### カテゴリ例

- Campus
- Kyoto
- Portrait
- Event
- Travel
- Night
- Film Style

### ハリボテ段階での対応

最初は仮画像やサンプル写真でよい。  
実際の部員作品が集まり次第、画像を差し替える。

### ギャラリー演出案

- スクロールに合わせて写真が奥から手前に出てくる
- 写真をクリックするとファインダーの中に表示される
- 背景にEXIF情報風の文字を表示する
- “ISO 400 / f1.8 / 1/250” のようなカメラUIを装飾として入れる
- 写真カードが少しランダムに傾いて配置される

---

## 13. Join Us / Recruitment Section

### 目的

新入生や興味のある学生を入部フォームへ誘導する。

### 内容

- 部員募集中であること
- 初心者歓迎
- カメラ未所持でもOK
- 留学生歓迎
- 撮影会・展示・イベント撮影などに参加できる
- 入部フォームへの大きなボタン

### 表示文案

```text
Join KUAS Photography Club

No camera? No problem.
No experience? Even better.

Bring your curiosity.
We will bring the moments.
```

日本語版：

```text
写真部 部員募集中

カメラがなくても大丈夫。
初心者でも大歓迎です。

写真を撮るのが好きな人、
カメラに興味がある人、
デザインや編集をやってみたい人、
大学生活で何か新しいことを始めたい人。

ぜひ一緒に活動しましょう。
```

---

## 14. Forms & Important Links Section

### 目的

毎回リンクやQRコードを変えなくても、このページだけ更新すればよい状態にする。

### 機能

重要リンクをまとめる。

### リンク例

- 入部フォーム
- 撮影会参加フォーム
- 新歓参加フォーム
- イベントスタッフ募集
- 展示作品提出フォーム
- 部員用連絡フォーム
- Instagram
- X / Twitter
- Google Drive
- Contact

### 表示仕様

- 現在受付中のフォームを一番上に表示
- 受付終了したものは“Closed”として残す、または非表示
- 管理しやすいようにリンク情報を1か所で編集できる構造にする

---

## 15. SNS / Footer

### 内容

- Instagramリンク
- 大学名
- クラブ名
- Contact
- Copyright
- “Made by KUAS Photography Club” の表示

### 表示文案

```text
KUAS Photography Club
Kyoto University of Advanced Science

Capture the moment.
Create the memory.
```

---

## 16. アニメーション仕様

### 必須アニメーション

- Openingのファインダー演出
- Heroの3Dカメラまたはレンズ
- 写真カードの浮遊アニメーション
- スクロールに合わせたセクション出現
- リンクカードのホバーアニメーション
- ギャラリー写真の拡大演出
- シャッター風の画面フラッシュ
- マウス移動に応じたパララックス

### 追加できるとよい演出

- レンズフォーカス風のブラー解除
- ISO / shutter speed / aperture風のUI表示
- フィルムグレイン
- 光の反射
- カメラのAF枠
- 写真が現像されるような表示
- スクロールに応じてカメラが回転する3D演出
- 背景の写真が奥行きを持って流れる演出

---

## 17. 3D要素仕様

### 3Dで表現したいもの

- カメラ本体
- レンズ
- ファインダー
- 浮遊する写真カード
- フィルムロール
- シャッターボタン
- 光の軌跡

### 3Dの使い方

Hero Sectionに大きく3Dカメラまたはレンズを配置する。  
スクロールするとカメラが回転したり、レンズの中に写真が映ったりする。  
写真カードは奥行きのある空間に浮かせる。

### 注意

実装が重くなりすぎる場合は、3Dモデルではなく疑似3DのCSSや画像でもよい。  
ただし、見た目としては立体感と奥行きを感じるようにする。

---

## 18. レスポンシブ対応

### スマホ

Instagramからの流入が多いため、スマホ表示は必須。  
ただし、スマホでも「凝っている」と感じる演出を残す。

### PC

PCでは3Dや横スクロール、マウス追従演出を強める。  
大画面で見たときにポートフォリオサイトのように見える構成にする。

---

## 19. 管理・更新しやすさ

現時点では本格的な管理画面は不要。  
ただし、リンクやフォームURLを更新しやすい構造にする。

### 最低限の管理方法

- links.js または links.json にリンク一覧をまとめる
- gallery.js または gallery.json に写真一覧をまとめる
- activities.js に活動情報をまとめる

### 将来的な拡張

- NotionやGoogle Sheetsからリンクを取得
- Headless CMSで写真や活動を管理
- 管理者用ページを追加
- イベントごとにQRコードを発行
- 部員作品の投稿機能
- 多言語切り替え

---

## 20. 多言語対応

KUASには留学生も多いため、日本語と英語の両方に対応できるとよい。

### 初期対応

- メインコピーは英語
- 説明文は日本語＋英語
- ボタンは英語中心でもよい

### 将来的対応

- Japanese / English切り替えボタン
- ブラウザ言語による自動切り替え

---

## 21. 技術スタック案

実装候補：

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js
- React Three Fiber
- Drei
- Lenis
- Vercel

ただし、最優先は見た目と演出である。  
実装しやすい構成を選んでよい。

---

## 22. ページ内の主要コンポーネント

### Components

- `OpeningViewfinder`
- `HeroSection`
- `ThreeCameraScene`
- `FloatingPhotoCards`
- `QuickLinks`
- `AboutSection`
- `ActivityCarousel`
- `InteractiveGallery`
- `JoinSection`
- `FormsSection`
- `Footer`
- `ShutterTransition`
- `CameraHUD`
- `LanguageToggle`

---

## 23. デザイン参考イメージ

### UIモチーフ

- カメラのファインダー
- ミラーレスカメラのUI
- Lightroom / Capture One風の編集画面
- フィルム写真
- 暗室
- レンズの反射
- シャッター
- EXIF情報
- フォーカスポイント
- ギャラリー展示空間

### 避けたいデザイン

- 普通の大学クラブ紹介ページ
- ただのLinktree風ページ
- 文字だけの説明ページ
- Canvaテンプレート感の強いデザイン
- 企業サイトっぽすぎるデザイン
- かわいすぎるポップなデザイン

---

## 24. MVPで実装する範囲

### 必須

- Opening演出
- Hero Section
- Quick Links
- About
- Activity Cards
- Gallery
- Join Button
- Footer
- スマホ対応
- リンク情報を1か所で管理できる構造

### できれば入れる

- 3Dカメラ
- スクロール連動アニメーション
- ギャラリー拡大表示
- 日本語/英語切り替え
- シャッター演出
- カメラHUD風UI

### 今はハリボテでよい

- ギャラリー写真
- イベント詳細
- 活動履歴
- 多言語切り替え
- CMS連携
- 管理画面

---

## 25. 完成イメージ

このサイトを開いた人が、最初の5秒で以下のように感じることを目指す。

- 「え、部活のサイトなのにすごい」
- 「写真部かっこいい」
- 「工学部っぽい技術感がある」
- 「ここに入りたいかも」
- 「Instagramのリンク先としてちゃんとしている」
- 「写真部の世界観が伝わる」

---

## 26. AIへの実装指示

以下の方針でWebサイトを制作してください。

KUAS Photography Clubの公式Webサイトとして、Instagramプロフィールリンクからアクセスされることを想定した、1ページ型のインタラクティブなランディングページを作成してください。

サイト全体のコンセプトは「Enter the Viewfinder」です。  
ユーザーがカメラのファインダーをのぞき込むようなOpening演出から始まり、写真部の世界に入っていくような体験にしてください。

見た目と演出を最優先してください。  
使いやすさよりも、初見で「すごい」と感じるデザインを重視してください。  
3D、アニメーション、パララックス、スクロール演出、カメラUI、ファインダー、シャッター、写真カード、ギャラリー演出を積極的に使ってください。

ただし、Instagramからスマホでアクセスする人が多いため、スマホでも最低限きれいに見えるようにしてください。

リンク集機能を必ず入れてください。  
入部フォーム、イベント参加フォーム、Instagram、撮影会フォーム、問い合わせなどを1か所にまとめるLinktree的な役割を持たせます。  
リンクは後から簡単に更新できるよう、配列またはJSONで管理してください。

ギャラリー機能も入れてください。  
最初は仮画像で構いません。  
写真カードが浮遊したり、クリックで拡大したり、スクロールで動いたりするような演出を入れてください。

全体の雰囲気は、黒を基調としたcinematicでpremiumなデザインにしてください。  
写真、光、レンズ、ファインダー、シャッター、EXIF情報、フィルムグレインなどのモチーフを使ってください。

最終的に、大学の部活サイトではなく、クリエイティブスタジオのWebサイトやインタラクティブなデジタル作品のように見えるものを目指してください。
