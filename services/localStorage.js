import { AsyncStorage } from "react-native";

export async function storeData(isSignedIn) {
  try {
    await AsyncStorage.setItem("isSignedIn", isSignedIn);
  } catch (error) {
    // Error saving data
  }
}

export async function retrieveData() {
  var value = null;
  try {
    value = await AsyncStorage.getItem("isSignedIn");
    if (value !== null) {
      console.log(value);
    }
  } catch (error) {
    console.error(error);
  }

  return value;
}
