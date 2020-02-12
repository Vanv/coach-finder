import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCLfso4TTMBvmAVXFtxSQZJpUaMUGgiFhQ",
    authDomain: "urcoach-finder.firebaseapp.com",
    databaseURL: "https://urcoach-finder.firebaseio.com",
    projectId: "urcoach-finder",
    storageBucket: "urcoach-finder.appspot.com",
    messagingSenderId: "20983658884",
    appId: "1:20983658884:web:ebee4deea8cd3f4ea185d1"
  };

  // Initialize Firebase

const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();

//firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
