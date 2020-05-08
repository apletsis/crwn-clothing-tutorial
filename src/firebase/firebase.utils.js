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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
//Some examlpes of using firestore
//firestore.collection('users').doc('some_id').collection('cartItems').doc('some_id');
//firestore.doc('/users/some_id/cartItems/some_id');
//firestore.collection('/users/some_id/cartitems');

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // second parametr ({}) is an initial object for the first iteration,
  // and on each iteration create property with appropriate value as an collection
  // so it will looks like accumulator['hats'] = hats(as a collection)
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }) // prompt: 'select_account' to trigger auth popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
