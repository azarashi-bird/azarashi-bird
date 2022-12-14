let ISDEBUG = false;
// ISDEBUG = true;

import {getApps, getApp, initializeApp} from 'firebase/app';
import {getAuth, initializeAuth} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getReactNativePersistence} from 'firebase/auth/react-native';

import {
  doc,
  setDoc,
  increment,
  getFirestore,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDoc,
} from 'firebase/firestore';

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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const auth = getAuth(app);
const firestore = getFirestore(app);
const TOKUS = 'toku_table';
const USERS = 'users';

const incUserPostCount = async (uid) => {
  const usersRef = doc(firestore, USERS, uid);
  const docSnap = await getDoc(usersRef);
  if (docSnap.exists()) {
    if (ISDEBUG) console.log('INCUSERPOSTCOUNT', uid);
    await updateDoc(usersRef, {
      postCount: increment(1),
    });
  } else {
    if (ISDEBUG) console.log('create USER DOCMENT');
    await setDoc(usersRef, {
      postCount: increment(1),
    });
  }
};

// userテーブルに、配列を作る。変化した日を配列にプッシュし、その日に対応するindex番号が画像index
const pushUserEvoleDay = async () => {
  const uid = auth.currentUser?.uid;
  const usersRef = doc(firestore, USERS, uid);
  const date = new Date();
  if (usersRef) {
    await updateDoc(usersRef, {
      date_array: arrayUnion(date),
    });
  } else {
    await setDoc(usersRef, {
      date_array: arrayUnion(date),
    });
  }
  if (ISDEBUG) console.log('PushUserEvoluDay called');
};

const getUserEvoleDay = async () => {
  const uid = auth.currentUser?.uid;
  const docRef = doc(firestore, USERS, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    if (ISDEBUG) console.log('return evolDay:', docSnap.data().date_array);
    return docSnap.data().date_array;
  } else {
    if (ISDEBUG) console.log('fail getUserEvolDay');
    return [];
  }
};

const getUserPostCount = async (uid) => {
  const docRef = doc(firestore, USERS, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    if (ISDEBUG) console.log('return postCount:', docSnap.data().postCount);
    return docSnap.data().postCount;
  } else {
    if (ISDEBUG) console.log('fail getUserPostCount');
    return 0;
  }
};

const postToku = async (toku) => {
  const uid = auth.currentUser?.uid;
  const value = {
    user_id: uid,
    toku: toku,
    createdAt: new Date(),
  };
  const doc_name = Date.now() + uid;
  await setDoc(doc(firestore, TOKUS, doc_name), value);
  if (ISDEBUG) console.log('added to firebase!');
};

/*
  getNewestToku 引数の数最新の徳を取得する
  descにしたい！
*/

const getNewestToku = async (num) => {
  const tokuList = [];

  const tokuRef = collection(firestore, TOKUS);
  const q = query(tokuRef, orderBy('createdAt', 'desc'), limit(num));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => tokuList.push(doc.data()));

  if (ISDEBUG) console.log('called newestToku. read count:', tokuList.length);
  return tokuList;
};

/*
  descにしたい！
*/

const getUserToku = async (afterThisTime = new Date(1970, 0, 1)) => {
  const uid = auth.currentUser?.uid;
  const tokuList = [];
  const tokuRef = collection(firestore, TOKUS);
  const q = query(
    tokuRef,
    where('user_id', '==', uid),
    orderBy('createdAt', 'desc'),
    where('createdAt', '>=', afterThisTime)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => tokuList.push(doc.data()));

  if (ISDEBUG) console.log('getUserTOku read count:::::', tokuList.length);
  return tokuList;
};

const getDailyToku = async () => {
  const _d = new Date();
  const d = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const dailyTokuList = [];

  const tokuRef = collection(firestore, TOKUS);
  const q = query(
    tokuRef,
    orderBy('createdAt', 'asc'),
    where('createdAt', '>=', d)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => dailyTokuList.push(doc.data()));

  if (ISDEBUG) console.log('called DailyToku. COUNT::::', dailyTokuList.length);
  return dailyTokuList;
};

const getMonthlyToku = async (afterThisTime) => {
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  const startThisMonth = afterThisTime
    ? afterThisTime
    : new Date(thisYear, thisMonth, 1); // 2022/09/01 00:00:00(nihonzikan)

  const startNextMonth = new Date(thisYear, thisMonth + 1, 1); // 2022/10/01 00:00:00(nihonzikan)
  const uid = auth.currentUser?.uid;

  const tokuList = [];

  const tokuRef = collection(firestore, TOKUS);
  const q = query(
    tokuRef,
    where('user_id', '==', uid),
    orderBy('createdAt', 'asc'),
    where('createdAt', '>=', startThisMonth),
    where('createdAt', '<', startNextMonth)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => tokuList.push(doc.data()));

  if (ISDEBUG) console.log('CALLED TMonTHLYTOKU. COUNT:', tokuList.length);
  return tokuList;
};

export {
  auth,
  firestore,
  postToku,
  getUserToku,
  getMonthlyToku,
  getDailyToku,
  pushUserEvoleDay,
  getUserEvoleDay,
  getNewestToku,
  incUserPostCount,
  getUserPostCount,
};
