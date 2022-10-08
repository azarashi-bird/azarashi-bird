let ISDEBUG = false;
// ISDEBUG = true;
// Import the functions you need from the SDKs you need

import {getApps, getApp, initializeApp, FirebaseApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {
  Firestore,
  doc,
  setDoc,
  increment,
  getFirestore,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  QueryDocumentSnapshot,
  getDoc,
  namedQuery,
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

// const auth = firebase.auth();
const auth = getAuth(app);
// const firestore = firebase.firestore();
const firestore = getFirestore(app);
// const tokuTable = firestore.collection('toku_table');
const TOKUS = 'toku_table';
// const USRSTABLE = firestore.collection('users');
const USERS = 'users';

// const increment = firebase.firestore.FieldValue.increment(1);

const incUserPostCount = async (uid) => {
  const usersRef = doc(firestore, USERS, uid);
  await updateDoc(usersRef, {
    postCount: increment(1),
  });
  // const ref = USRSTABLE.doc(uid);
  // const doc = await ref.get();

  // if (doc.exists) {
  //   // ドキュメントが存在している
  //   await ref.update({postCount: increment});
  // } else {
  //   // ドキュメントがまだ存在していない
  //   await ref.set({postCount: 1});
  // }
  if (ISDEBUG) console.log(uid, 'INCUSERPOST COUNT CALLED');
};

// userテーブルに、配列を作る。変化した日を配列にプッシュし、その日に対応するindex番号が画像index
const pushUserEvoleDay = async () => {
  const uid = auth.currentUser?.uid;
  // const ref = USRSTABLE.doc(uid);
  // const doc = await ref.get();
  const usersRef = doc(firestore, USERS, uid);
  const date = new Date();
  if (usersRef) {
    // await ref.update({
    //   date_array: firebase.firestore.FieldValue.arrayUnion(date),
    // });
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
  // const ref = USRSTABLE.doc(uid);
  const docRef = doc(firestore, USERS, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    if (ISDEBUG) console.log('return evolDay:', docSnap.data().date_array);
    return docSnap.data().date_array;
  } else {
    if (ISDEBUG) console.log('fail getUserEvolDay');
    return [];
  }
  // const doc = await ref.get();
  // if (ISDEBUG) console.log('getUserEvoleDay called');
  // if (doc.exists) {
  //   return doc.data().date_array;
  // } else {
  //   return [];
  // }
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
  // const ref = USRSTABLE.doc(uid);
  // const doc = await ref.get();
  // if (ISDEBUG) console.log(uid, 'POST COUNT CASLLED');
  // if (doc.exists) {
  //   return doc.data().postCount;
  //   // ドキュメントが存在している
  // } else {
  //   // ドキュメントがまだ存在していない
  //   return 0;
  // }
};

const postToku = async (toku) => {
  const uid = auth.currentUser?.uid;
  const value = {
    user_id: uid,
    toku: toku,
    createdAt: new Date(),
  };
  const doc_name = Date.now() + uid;
  // await tokuTable.add(value);
  await setDoc(doc(firestore, TOKUS, doc_name), value);
  if (ISDEBUG) console.log('added to firebase!');
};

// const getAllToku = async () => {
//   // const tokuDiffList = [];
//   // await tokuTable
//   //   .orderBy('createdAt', 'asc')
//   //   .get()
//   //   .then((querySnapshot) => {
//   //     querySnapshot.forEach((toku) => {
//   //       tokuDiffList.push(toku.data());
//   //     });
//   //   });
//   // if (ISDEBUG) console.log('CALLED GETALL read count:', tokuDiffList.length);
//   // return tokuDiffList;
// };

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

  // await tokuTable
  //   .orderBy('createdAt', 'desc')
  //   .limit(num)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((toku) => {
  //       tokuList.push(toku.data());
  //     });
  //   });
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

  // await tokuTable
  //   .where('user_id', '==', uid)
  //   .orderBy('createdAt', 'desc')
  //   .where('createdAt', '>=', afterThisTime)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((toku) => tokuList.push(toku.data()));
  //   });
  if (ISDEBUG) console.log('getUserTOku read count:::::', tokuList.length);
  return tokuList;
};

// const getTargetToku = async (userid) => {
//   const tokuList = [];
//   await tokuTable
//     .where('user_id', '==', userid)
//     .orderBy('createdAt', 'asc')
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((toku) => tokuList.push(toku.data()));
//     });
//   if (ISDEBUG) console.log('CALLED GETUSERTOKU. count:::::', tokuList.length);
//   return tokuList;
// };

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

  // await tokuTable
  //   .orderBy('createdAt', 'asc')
  //   .where('createdAt', '>=', d)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((toku) => dailyTokuList.push(toku.data()));
  //   });
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

  // await tokuTable
  //   .where('user_id', '==', uid)
  //   .orderBy('createdAt', 'asc')
  //   .where('createdAt', '>=', startThisMonth)
  //   .where('createdAt', '<', startNextMonth)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((toku) => tokuList.push(toku.data()));
  //   });
  if (ISDEBUG) console.log('CALLED TMonTHLYTOKU. COUNT:', tokuList.length);
  return tokuList;
};

export {
  auth,
  firestore,
  postToku,
  // getAllToku, // これもusersコレクション作り終わったら不要になる
  getUserToku,
  getMonthlyToku,
  getDailyToku,
  // getTargetToku,
  pushUserEvoleDay,
  getUserEvoleDay,
  getNewestToku,
  incUserPostCount,
  getUserPostCount,
};
