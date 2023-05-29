import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAWaFtzWppRcydAnMpMNo0Ck1tArwKwwhQ",
    authDomain: "project-71-44a03.firebaseapp.com",
    projectId: "project-71-44a03",
    storageBucket: "project-71-44a03.appspot.com",
    messagingSenderId: "748427201702",
    appId: "1:748427201702:web:7e2de3eb787a0d07353867"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
