import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
   
        apiKey: "AIzaSyDOfAtPQiK1Ctd6os1xXmBvjlUw-FpxxFs",
        authDomain: "friend-test-7db34.firebaseapp.com",
        projectId: "friend-test-7db34",
        storageBucket: "friend-test-7db34.appspot.com",
        messagingSenderId: "15254435500",
        appId: "1:15254435500:web:a873c63ce7a1e0bb775109",
        measurementId: "G-8PJ5GHCV28"
    
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};