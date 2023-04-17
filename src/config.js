import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBDLsxm7I7nDi0OYhs9e9D5ngsEXzYn4WM",
    authDomain: "kmutnbcommunity.firebaseapp.com",
    databaseURL: "https://kmutnbcommunity-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kmutnbcommunity",
    storageBucket: "kmutnbcommunity.appspot.com",
    messagingSenderId: "1094643241184",
    appId: "1:1094643241184:web:40da0f1b0fdb2596940085",
    measurementId: "G-ZVVQJKLXEG"
});

export default firebaseConfig;