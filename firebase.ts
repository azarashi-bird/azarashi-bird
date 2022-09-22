// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// require('firebase/firestore');
import {ENV} from './ENV';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = ENV;

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

/* 
　徳をPost 使い方
  onPress={() => {
    postToku(toku);
  }}
  */

const postToku = async (toku) => {
  const uid = auth.currentUser?.uid;
  const value = {
    user_id: uid,
    toku: toku,
    createdAt: new Date(),
  };
  console.log(value, 'postTokuValue');
  await tokuTable.add(value);
  console.log('added to firebase!');
};

/* 
  getAllToku  返ってくる物(UerId,Toku,Date)
  const test = async () => {
    const list = await getAllToku();
    console.log(list[0].createdAt, 'risuto');
  };

onPress={() => test()}

*/
const getAllToku = async () => {
  const tokuList = [];
  await tokuTable.get().then((querySnapshot) => {
    querySnapshot.forEach((toku) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(toku.id, ' => ', toku.data());
      tokuList.push(toku.data());
    });
  });
  return tokuList;
};

/* getTokuById

const userTokus = await getUserToku();
const userTokuNUmber = userTokus.length;
*/

const getUserToku = async () => {
  const uid = auth.currentUser?.uid;
  const tokuList = [];
  await tokuTable
    .where('user_id', '==', uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((toku) => tokuList.push(toku.data()));
    });
  return tokuList;
};

export {auth, firestore, postToku, getAllToku, getUserToku};
