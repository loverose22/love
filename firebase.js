import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGMtw11yK1bui6AI346ITo6jPQHSx5H9U",
  authDomain: "loverose-1178b.firebaseapp.com",
  projectId: "loverose-1178b",
  storageBucket: "loverose-1178b.appspot.com",
  messagingSenderId: "218938608311",
  appId: "1:218938608311:web:8ae3e6c40efcd90a5bdb32",
  measurementId: "G-TE9FFCYTST"
};

const app = initializeApp(firebaseConfig);
export const db = app.firestore();
