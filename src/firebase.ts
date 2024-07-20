// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJ4FbkTQdXeXSWhZPghl1ngyWDE-pfKEI',
  authDomain: 'firecounter-6415c.firebaseapp.com',
  projectId: 'firecounter-6415c',
  storageBucket: 'firecounter-6415c.appspot.com',
  messagingSenderId: '71930308533',
  appId: '1:71930308533:web:c84a3e3588a66f869c5bfc',
  measurementId: 'G-2EQPTL3SXT',
};

// Initialize Firebase
const initApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(initApp);
