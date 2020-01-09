import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCetMBEuYDrBcoBVwYexbbzyg5YXk2dSQk",
  authDomain: "coact-finder.firebaseapp.com",
  databaseURL: "https://coact-finder.firebaseio.com",
  projectId: "coact-finder",
  storageBucket: "coact-finder.appspot.com",
  messagingSenderId: "1039149683617",
  appId: "1:1039149683617:web:fdc322c3d7a443e28ab1e0"
  };
  
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
