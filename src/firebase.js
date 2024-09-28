// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlYDCZAWIDI_FxSwGRBeVaNmQVEIE70RU",
  authDomain: "sih-proj-7e764.firebaseapp.com",
  projectId: "sih-proj-7e764",
  storageBucket: "sih-proj-7e764.appspot.com",
  messagingSenderId: "192044591435",
  appId: "1:192044591435:web:a7c574054fd935a684e0ce",
  measurementId: "G-R413LC5HN4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
