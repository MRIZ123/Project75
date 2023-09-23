import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBQcBD3oSgDaKl6-Zussv-mugecohU9Xdg",
  authDomain: "e-ride-cb3bc.firebaseapp.com",
  databaseURL: "https://e-ride-cb3bc-default-rtdb.firebaseio.com",
  projectId: "e-ride-cb3bc",
  storageBucket: "e-ride-cb3bc.appspot.com",
  messagingSenderId: "260676119995",
  appId: "1:260676119995:web:c3e25abe3c689f4e20689e"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
