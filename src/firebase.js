import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABtU_uw8kEizcQ_k823D1_KEQXEHjJF2M",
    authDomain: "todo-list-b16c8.firebaseapp.com",
    projectId: "todo-list-b16c8",
    storageBucket: "todo-list-b16c8.appspot.com",
    messagingSenderId: "776404495096",
    appId: "1:776404495096:web:3b4608a9715fe95a06690d",
    measurementId: "G-W663LGD5GJ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;