# azarashi-bird

## icon

Ionicons(https://ionic.io/ionicons)

## navigation

React Navigation(https://reactnavigation.org/)

## UI Library

React Native Paper(https://callstack.github.io/react-native-paper/index.html)

## set up

### ENV.js の作成

firebase 接続に必要な ENV.js ファイルを作成したい

### firebase のアカウントを作成する

firebase config を ENV.js に記載する（ENV.sample.js の雛形を参照）

### firebase cloud firestore の用意

- 開発中はテストモードで OK
- Region は east asia とか適当で OK
- 「コレクションを開始」を押下し、「toku_table」の名前で保存する（ドキュメント ID は自動 ID で OK、フィールドは何も記載しないで保存する）

### firebase auth の用意

- ネイティブのプロバイダ、 「メール/パスワード」を有効にして保存（メールリンクは無効で OK）
