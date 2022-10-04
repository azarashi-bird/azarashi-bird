# birdonation 🕊

by Team Azarashi

## What is birdnation?

「ちょっといいこと、カタチにしよう」
birdonation は日々、「徳を積むために鳥を放つ」ミャンマーの習慣からインスパイアされました。

いつもより少しだけ心と時間を使って行った「ちょっといいこと　=　徳分」を記録して、鳥を空に放ってみましょう。その他にも、誰かの徳分を見て参考にしたり、徳分の数によって変化する自分の来世の姿を見て楽しむことができたり、徳を積むことを気軽な習慣にできる、そんなアプリです。

# Technology Used

### icon

Ionicons(https://ionic.io/ionicons)

### navigation

React Navigation(https://reactnavigation.org/)

### UI Library

React Native Paper(https://callstack.github.io/react-native-paper/index.html)

### build

Expo(https://expo.dev/)

### formatting

husky & prettier

### data base

Firebase(https://firebase.google.com/?hl=ja)

# Downloading and installing steps

1. このレポジトリをクローンします

```bash
$ git clone https://github.com/azarashi-bird/azarashi-bird.git
```

2. このレポジトリに移動します

```bash
$ cd azarashi-bird
```

3. dependencies をインストールします

```bash
$ npm init
```

4. Firebase のアカウントを作成します(https://firebase.google.com/?hl=ja)

5. Use Firebase Authentication と Firestore Database を利用します。

6. .ENV.local ファイルを作成します

```bash
$ touch .ENV.local
```

8. Firebase のプロジェクト設定から、config をコピーし、.ENV.local に字貼り付けます。

```bash
export const ENV = {
    FIREBASE_API_KEY=XXXXXXXXXX
    FIREBASE_AUTH_DOMAIN=XXXXXXXXXX
    FIREBASE_PROJECT_ID=XXXXXXXXXX
    FIREBASE_STORAGE_BUCKET=XXXXXXXXXX
    FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXX
    FIREBASE_APP_ID=XXXXXXXXXX
    }
```

9. expo を起動します

```bash
$ npm run ios
```

## TypeScript を使用しての型チェック方法

この章は上のインストール、起動まで完了している想定です。

1. グローバルで　 TypeScript をインストールしてください。

```zsh
npm install -g typescript
```

2. `npx tsc` コマンドを走らせます

```zsh
$ npx tsc
```

## birdonation の使い方

### Login or Resister

アプリを起動したら、ログイン画面が出てきます。初めての利用ならばメールアドレスとパスワードを入力し「Resister」ボタンを押してください。すでに登録アカウントがあれば、登録したメールアドレスとパスワードを入力して「Login」ボタンを押してください。

### ホーム

ホームのページにはカゴに入っている鳥と、徳の入力画面があります。徳を入力、もしくは徳入力欄をタップしたときに表示される徳の例をタップしたら、「徳を登録」ボタンを押してください。
徳を登録すると、鳥がカゴから飛び立ち、その日に世界で飛ばされた徳の総数と、あなたの現在の来世の姿が表示されます。「やったね！」ボタンを押すと、徳を入力するホーム画面に戻ります。

### 来世の姿

来世の姿のページには、あなたが今まで積んだ徳の総数と、現在の来世の姿が表示されています。
その下にはマスで表されたカレンダーが表示され、1 日に積んだ徳の数に応じてカレンダーの色が変わっています。また、来世の姿が変化した日には変化した来世の姿のスタンプが押され、マスをクリックするとその日に積んだ徳の内容がポップアップで詳細に見ることができます。ポップアップは「close」ボタンを押すと閉じます。

### 記録

記録のページには、自分以外のユーザーが積んだ徳の最新 20 件と、自分が積んだ徳のログがタブ切り替えで見ることができます。自分以外のユーザーが今どんな来世の姿なのかも、アイコンで確認することができます。

### 来世図鑑

来世図鑑のページには、自分が今まで経てきた来世の姿を見ることができます。経ていない来世の姿は、「？？？」と unknown イメージと共に隠されています。
