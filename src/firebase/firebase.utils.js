// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyCfHlggrI7FXkqkdLC6okPOhPtSUV1dzaE",
//     authDomain: "crwn-db-1a6d9.firebaseapp.com",
//     projectId: "crwn-db-1a6d9",
//     storageBucket: "crwn-db-1a6d9.appspot.com",
//     messagingSenderId: "866362809121",
//     appId: "1:866362809121:web:9d96c340f77f3c2ca07c60",
//     measurementId: "G-6V7CPEJG1Q"
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfHlggrI7FXkqkdLC6okPOhPtSUV1dzaE",
  authDomain: "crwn-db-1a6d9.firebaseapp.com",
  projectId: "crwn-db-1a6d9",
  storageBucket: "crwn-db-1a6d9.appspot.com",
  messagingSenderId: "866362809121",
  appId: "1:866362809121:web:9d96c340f77f3c2ca07c60",
  measurementId: "G-6V7CPEJG1Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then(result => {
    // Handle result here
    console.log(result);
  })
  .catch(error => {
    // Handle errors here
    console.error("Error during sign in:", error);
  });

export default app;
