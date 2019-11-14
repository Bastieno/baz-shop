import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCcZZ5Asxqzb2yM8_2y41nbd_c_N0l4wOE",
  authDomain: "baz-shop.firebaseapp.com",
  databaseURL: "https://baz-shop.firebaseio.com",
  projectId: "baz-shop",
  storageBucket: "baz-shop.appspot.com",
  messagingSenderId: "1095234701078",
  appId: "1:1095234701078:web:fb993892b44f8f25f33237",
  measurementId: "G-FECN7H42DT"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;