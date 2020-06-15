import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVIPSMNuRWN9Tnfwxu4a7PYxneYm0uWgA",
    authDomain: "optimo-db.firebaseapp.com",
    databaseURL: "https://optimo-db.firebaseio.com",
    projectId: "optimo-db",
    storageBucket: "optimo-db.appspot.com",
    messagingSenderId: "175815541884",
    appId: "1:175815541884:web:58c8aa5cfcbb30044b75f9",
    measurementId: "G-YCEQKC3CGM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;