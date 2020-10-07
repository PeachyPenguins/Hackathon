import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, getData } from "../actions";
import { Formik } from "formik";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

// Firebase Import
import firebase from "../firebase";

export default function Login({ navigation }) {
  // Redux Hooks
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  // Firebase Ref to database
  const database = firebase.database().ref();

  // const rotateValueHolder = new Animated.Value(0);

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
    header: {
      fontSize: 30,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", }}
        onSubmit={(values) => console.log(values)}
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
