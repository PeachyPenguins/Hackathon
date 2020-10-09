// Firebase Import
import firebase from "./firebase";

const auth = firebase.auth();

export function signIn(username, password, navigation) {
  auth
    .signInWithEmailAndPassword(
      username,
      password
    )
    .then(() => {
      console.log("User signed in! Navigating to Dashboard...");
      navigation.navigate("Dashboard", { name: "Dashboard" });
    })
    .catch((error) => {

      console.error(error);
    });
}

export function signUp(username, password, navigation) {
  auth
  .createUserWithEmailAndPassword(
    username,
    password
  )
  .then(() => {
    console.log("User signed up! Navigating to Dashboard...");
    navigation.navigate("Dashboard", { name: "Dashboard" });
  })
  .catch((error) => {

    console.error(error);
  });
} 