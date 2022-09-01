// import firebase from "firebase";

// import "firebase/database";
// import firebase from "firebase";
// import "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//     apiKey: "AIzaSyCA9XTvGoYNI0cxwiym-PC-izyAuMXnZpQ",
//     authDomain: "twitter-clone-58960.firebaseapp.com",
//     projectId: "twitter-clone-58960",
//     storageBucket: "twitter-clone-58960.appspot.com",
//     messagingSenderId: "564935822642",
//     appId: "1:564935822642:web:377a7433ada11ff2c9db2b",
//     measurementId: "G-FCEXRRJJ72"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const db = firebase.firestore();

// export default db;

import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCA9XTvGoYNI0cxwiym-PC-izyAuMXnZpQ",
    authDomain: "twitter-clone-58960.firebaseapp.com",
    projectId: "twitter-clone-58960",
    storageBucket: "twitter-clone-58960.appspot.com",
    messagingSenderId: "564935822642",
    appId: "1:564935822642:web:377a7433ada11ff2c9db2b",
    measurementId: "G-FCEXRRJJ72"
};

const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const db = firebase.firestore();

export default db;