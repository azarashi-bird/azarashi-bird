// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
require('firebase/firestore');
import {ENV} from './ENV';

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

/* 
　徳をPost 使い方
  onPress={() => {
    postToku(userId, toku);
  }}
  */

const tokuTable = firestore.collection('toku_table');
const postToku = async (userId, toku) => {
  const value = {
    user_id: userId,
    toku: toku,
    createdAt: new Date(),
  };
  await tokuTable.add(value);
  console.log('added to firebase!');
};

//getAllToku (UerId,Toku,Date)

/* 
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

export {auth, firestore, postToku, getAllToku};
