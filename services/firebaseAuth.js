// Firebase Import
import firebase from "./firebase";

const auth = firebase.auth();

export function signIn(username, password) {
  auth
    .signInWithEmailAndPassword(
      username,
      password
    )
    .then(() => {
      console.log("User signed in!");
    })
    .catch((error) => {

      console.error(error);
    });
}
