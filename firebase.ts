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
  console.log('CALLED POSTTOKU');
  const uid = auth.currentUser?.uid;
  const value = {
    user_id: uid,
    toku: toku,
    createdAt: new Date(),
  };
  await tokuTable.add(value);
  //console.log('added to firebase!');
};

const getAllToku = async () => {
  const tokuDiffList = [];
  await tokuTable
    .orderBy('createdAt', 'asc')
    .get()
    .then((querySnapshot) => {
      console.log('CALLED GETALLTOKU');
      querySnapshot.forEach((toku) => {
        tokuDiffList.push(toku.data());
      });
    });
  return tokuDiffList;
};

/*
  getNewestToku 引数の数最新の徳を取得する
*/

const getNewestToku = async (num) => {
  const tokuList = [];
  await tokuTable
    .orderBy('createdAt', 'asc')
    .limit(num)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(toku.id, ' => ', toku.data());
        tokuList.push(toku.data());
      });
    });
  return tokuList;
};

const getUserToku = async () => {
  const uid = auth.currentUser?.uid;
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', uid)
    .orderBy('createdAt', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  // console.log({uid})
  return tokuList;
};

const getTargetToku = async (userid) => {
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', userid)
    .orderBy('createdAt', 'asc')
    .get()
    .then((querySnapshot) => {
      console.log('CALLED GETUSERTOKU');
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  return tokuList;
};

const getDailyToku = async () => {
  console.log('called getDailyToku');
  //今（Thu Sep 06 2012 09:04:30 GMT+0900）
  const _d = new Date();
  //同日の0時0分0秒
  const d = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const dailyTokuList = [];
  await tokuTable
    .orderBy('createdAt', 'asc')
    .where('createdAt', '>=', d)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => dailyTokuList.push(toku.data()));
    });
  return dailyTokuList;
};

function getFirstDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

const getMonthlyToku = async () => {
  console.log('CALLED GETMonTHLYTOKU');

  const startDate = getFirstDate(new Date());
  const endDate = getLastDate(new Date());
  const uid = auth.currentUser?.uid;
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', uid)
    .orderBy('createdAt', 'asc')
    .startAt(startDate)
    .endAt(endDate)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
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
