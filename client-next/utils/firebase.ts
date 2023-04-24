import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCcZZ5Asxqzb2yM8_2y41nbd_c_N0l4wOE',
  authDomain: 'baz-shop.firebaseapp.com',
  databaseURL: 'https://baz-shop.firebaseio.com',
  projectId: 'baz-shop',
  storageBucket: 'baz-shop.appspot.com',
  messagingSenderId: '1095234701078',
  appId: '1:1095234701078:web:fb993892b44f8f25f33237',
  measurementId: 'G-FECN7H42DT',
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(config);
export const db = getFirestore(app);
