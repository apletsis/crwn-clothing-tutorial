import firebase from 'firebase/app';

import 'firebase/firestore'; // for db
import 'firebase/auth'; // for auth

const config = {
  apiKey: "AIzaSyAvLxrPNl0L4v5n5jbbyBEJvaXO_UFWAV8",
  authDomain: "crwn-clothing-db-de071.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-de071.firebaseio.com",
  projectId: "crwn-clothing-db-de071",
  storageBucket: "crwn-clothing-db-de071.appspot.com",
  messagingSenderId: "222505694916",
  appId: "1:222505694916:web:25b830955da20a069ebb91",
  measurementId: "G-23JKLQH7MB"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }) // prompt: 'select_account' to trigger auth popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
