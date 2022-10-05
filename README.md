# Birdonation

by Team Azarashi

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

8. Copy & paste config from Firebase project setting at .ENV.local

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

9. Run

```bash
$ npm run ios
```

## How to use birdonation

### Login or Resister

1. start app
2. if you don't have birdonation account, you input your e-mail address and password, then you submit "Resister" button. If you have birdonation account, you input your resisted e-mail address and password, then you submit "Login" button.

### Home

On the Home(ホーム) page, there are a bird in the cage and a text input field for entering virtues. After entering a virtue or tapping the example of the virtue displayed when you tap the text input field, press the "徳を登録" button.
When you register a virtue, the bird will fly away from the cage, and the total number of virtues resisted in the world on that day and your current next life will be displayed. You have "やったね!" button will return you to the home screen where you can enter your virtues.

### Form of Next Life

On the Form of Next Life(来世の姿) page, the total number of virtues you have accumulated so far and your current form of your next life are shown.
Below that is a calendar represented by squares, and the color of the calendar changes according to the number of virtues you have accumulated in a day. On days when the form of the next life is changed, a stamp of the changed form of the next life is stamped, and by clicking on a square, a pop-up window shows the details of the virtues accumulated on that day. The pop-up is closed by pressing the "close" button.

### Log

On the Log(記録) page, you can see the latest 20 virtues accumulated by users others and the log of virtues accumulated by yourself by switching tabs. You can also see what the forms of next life like for users others by icons.

### Pictorial book of Next Life

On the Pictorial book of Next Life(来世図鑑), you can see the next life that you have passed through. The next life that you have not yet passed through is hidden with the image "???" and unknown images are hidden.

## Thanks for illustrations

free illustrations collection "フリイラくん" (https://furiirakun.com/)
