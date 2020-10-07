import firebase from "firebase";

// Config object from firebase settings
var firebaseConfig = {
  apiKey: "AIzaSyDw0P2WWaj7QEdZ09Q02jhkH8JfPBGk1ew",
  authDomain: "mlh-hackathon-a48b1.firebaseapp.com",
  databaseURL: "https://mlh-hackathon-a48b1.firebaseio.com",
  projectId: "mlh-hackathon-a48b1",
  storageBucket: "mlh-hackathon-a48b1.appspot.com",
  messagingSenderId: "621053552434",
  appId: "1:621053552434:web:4ec1c318ff3ed47bf0192b",
  measurementId: "G-6SEVVNTJLH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
