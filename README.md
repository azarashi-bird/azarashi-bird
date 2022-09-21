# azarashi-bird

"birdonation" development team

## What is birdnation?

"birdonation" is inspired by the Myanmar custom of "releasing a bird to accumulate virtues" every day.Let's record the "little good things" that you have done and release the bird into the sky. You can also use it as a reference by looking at someone else's good things, or enjoy seeing your next life changing according to the number of good things, making accumulating virtues a casual habit.

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
