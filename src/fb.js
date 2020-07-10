import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBIF6r9CZwZ89josy71oRB_L7-JzFy6rZo',
  authDomain: 'nin-todo.firebaseapp.com',
  databaseURL: 'https://nin-todo.firebaseio.com',
  projectId: 'nin-todo',
  storageBucket: 'nin-todo.appspot.com',
  messagingSenderId: '299382388428',
  appId: '1:299382388428:web:f1ac64dc300d7a7e61b469',
  measurementId: 'G-4RWQWJ9LEM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
