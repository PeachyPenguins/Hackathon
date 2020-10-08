import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, getData } from "../actions";
import { Formik } from "formik";
import { signIn } from "../services/firebaseAuth.js";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

// Firebase Import
import firebase from "../services/firebase";

export default function Login({ navigation }) {
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
      backgroundColor: "#2BD1FB",
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
          signIn(values.email, values.password, navigation);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <Animated.Image
              style={styles.logo}
              source={{
                uri: imageUrl,
              }}
            />
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
            <FormButton onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}