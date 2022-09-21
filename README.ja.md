# birdonation

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

1. Clone this repository

```bash
$ git clone https://github.com/azarashi-bird/azarashi-bird.git
```

2. Go into the repository

```bash
$ cd azarashi-bird
```

3. Install dependencies

```bash
$ npm init
```

4. Create Firebase Account(https://firebase.google.com/?hl=ja)

5. Create Firebase Account

6. Use Firebase Authentication and Firestore Database.

7. make .ENV.local

```bash
$ touch .ENV.local
```

8.Copy & paste config from Firebase project setting at .ENV.local

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

5. Run

```bash
$ npm run ios
```
