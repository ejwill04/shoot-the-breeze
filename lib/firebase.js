import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB_TkaE2E6DOMDtZa63NufAk8p2ryjuFHM",
  authDomain: "shoot-the-breeze-be6c8.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-be6c8.firebaseio.com",
  storageBucket: "shoot-the-breeze-be6c8.appspot.com",
  messagingSenderId: "1016431095596"
};

export default firebase.initializeApp(config);
export const reference = firebase.database().ref('messages');

const provider = new firebase.auth.GoogleAuthProvider();

export function signIn() {
  return firebase.auth().signInWithPopup(provider);
}

export function signOut(){
  return firebase.auth().signOut();
}
