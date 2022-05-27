import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA8lRmrdc583G-KnVVzoKWMOI2ETkDgyjc",
    authDomain: "p-71-d8497.firebaseapp.com",
    projectId: "p-71-d8497",
    storageBucket: "p-71-d8497.appspot.com",
    messagingSenderId: "95930871354",
    appId: "1:95930871354:web:94feb36aea80519d604f03"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
