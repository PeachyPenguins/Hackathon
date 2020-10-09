// Firebase Import
import firebase from "./firebase";
import { storeData } from "../services/localStorage";

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
      storeData("true");
    })
    .catch((error) => {

      console.error(error);
    });
}
