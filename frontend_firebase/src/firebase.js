// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBUfbogPW73vd3v_8pxBwOnK-RfOGxh47E",

  authDomain: "justpubsub.firebaseapp.com",

  projectId: "justpubsub",

  storageBucket: "justpubsub.appspot.com",

  messagingSenderId: "265476451734",

  appId: "1:265476451734:web:28b005fdf692f047c801b7",

  measurementId: "G-5KFJ1YCCTQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth, analytics}; 