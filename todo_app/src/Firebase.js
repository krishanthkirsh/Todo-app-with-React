// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     
//   };

import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyBm1oQ6E06wKnH6-nljnaT7EdSEwMtG_SI",
        authDomain: "todo-app-cd-fa170.firebaseapp.com",
        databaseURL: "https://todo-app-cd-fa170.firebaseio.com",
        projectId: "todo-app-cd-fa170",
        storageBucket: "todo-app-cd-fa170.appspot.com",
        messagingSenderId: "389570030546",
        appId: "1:389570030546:web:6baabdcd05ebb796e4360b",
        measurementId: "G-L01V9LP13F"
});

const db = firebase.firestore();
export default db;