import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB_TkaE2E6DOMDtZa63NufAk8p2ryjuFHM",
  authDomain: "shoot-the-breeze-be6c8.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-be6c8.firebaseio.com",
  storageBucket: "shoot-the-breeze-be6c8.appspot.com",
  messagingSenderId: "1016431095596"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
