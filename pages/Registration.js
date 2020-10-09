import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, getData } from "../actions";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import RegisterButton from "../components/RegisterButton";
import { signUp } from "../services/firebaseAuth"

// Firebase Import
import firebase from "../services/firebase";

//empty signUp expression till its merge

export default function Registration({ navigation }) {
    // Redux Hooks
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  // Firebase Ref to database
  const database = firebase.database().ref();

  const imageUrl = "https://i.imgur.com/19aMNlB.png";

  useEffect(() => {
    dispatch(getData());

    // Firebase Listener on Component Mount
    database.on("value", (snap) => {
      console.log("FIREBASE", snap);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2BD1FC",
    },
    logo: {
      marginBottom: "10%",
      marginTop: "10%",
      width: 150,
      height: 150,
    },
    form: {
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          signUp(values.email, values.password, navigation);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <FormInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />
            <FormInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
            />
            <FormButton onPress={handleSubmit} text={"Sign up"} />
          </View>
        )}
      </Formik>
    </View>
  );

}