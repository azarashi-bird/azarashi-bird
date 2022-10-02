let ISDEBUG = false;
// ISDEBUG = true;
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  databaseURL,
} from '@env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  databaseURL,
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const tokuTable = firestore.collection('toku_table');

const postToku = async (toku) => {
  const uid = auth.currentUser?.uid;
  const value = {
    user_id: uid,
    toku: toku,
    createdAt: new Date(),
  };
  await tokuTable.add(value);
  if (ISDEBUG) console.log('added to firebase!');
};

const getAllToku = async () => {
  const tokuDiffList = [];
  await tokuTable
    .orderBy('createdAt', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => {
        tokuDiffList.push(toku.data());
      });
    });
  if (ISDEBUG) console.log('CALLED GETALL read count:', tokuDiffList.length);
  return tokuDiffList;
};

/*
  getNewestToku 引数の数最新の徳を取得する
  descにしたい！
*/

const getNewestToku = async (num) => {
  const tokuList = [];
  await tokuTable
    .orderBy('createdAt', 'desc')
    .limit(num)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => {
        tokuList.push(toku.data());
      });
    });
  if (ISDEBUG) console.log('called newestToku. read count:', tokuList.length);
  return tokuList;
};

/*
  descにしたい！
*/

const getUserToku = async (afterThisTime = new Date(1970, 0, 1)) => {
  const uid = auth.currentUser?.uid;
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', uid)
    .orderBy('createdAt', 'desc')
    .where('createdAt', '>=', afterThisTime)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  if (ISDEBUG) console.log('getUserTOku read count:::::', tokuList.length);
  return tokuList;
};

const getTargetToku = async (userid) => {
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', userid)
    .orderBy('createdAt', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  if (ISDEBUG) console.log('CALLED GETUSERTOKU. count:::::', tokuList.length);
  return tokuList;
};

const getDailyToku = async () => {
  const _d = new Date();
  const d = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const dailyTokuList = [];
  await tokuTable
    .orderBy('createdAt', 'asc')
    .where('createdAt', '>=', d)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => dailyTokuList.push(toku.data()));
    });
  if (ISDEBUG) console.log('called DailyToku. COUNT::::', dailyTokuList.length);
  return dailyTokuList;
};

function getFirstDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

// const getMonthlyToku = async () => {
//   const startDate = getFirstDate(new Date());
//   const endDate = getLastDate(new Date());
//   const uid = auth.currentUser?.uid;
//   const tokuList = [];
//   await tokuTable
//     .where('user_id', '==', uid)
//     .orderBy('createdAt', 'asc')
//     .startAt(startDate)
//     .endAt(endDate)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((toku) => tokuList.push(toku.data()));
//     });
//   if (ISDEBUG) console.log('CALLED TMonTHLYTOKU. COUNT:', tokuList.length);
//   return tokuList;
// };

const getMonthlyToku = async () => {
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  const startThisMonth = new Date(thisYear, thisMonth, 1); // 2022/09/01 00:00:00(nihonzikan)
  const startNextMonth = new Date(thisYear, thisMonth + 1, 1); // 2022/10/01 00:00:00(nihonzikan)
  const uid = auth.currentUser?.uid;

  const tokuList = [];
  await tokuTable
    .where('user_id', '==', uid)
    .orderBy('createdAt', 'asc')
    .where('createdAt', '>=', startThisMonth)
    .where('createdAt', '<', startNextMonth)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  // if (ISDEBUG) console.log('CALLED TMonTHLYTOKU. COUNT:', tokuList.length);
  return tokuList;
};

export {
  auth,
  firestore,
  postToku,
  getAllToku,
  getUserToku,
  getMonthlyToku,
  getDailyToku,
  getTargetToku,
  getNewestToku,
};
