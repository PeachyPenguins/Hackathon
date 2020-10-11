import React, { useEffect } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { signIn } from "../services/firebaseAuth.js";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import RegisterButton from "../components/RegisterButton";

// Firebase Import
import firebase from "../services/firebase";

export default function Login({ navigation }) {
  // Redux Hooks
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const imageUrl = "https://i.imgur.com/19aMNlB.png";

  //Navigate to Registration
  const registerButtonPressed = () => {
    navigation.navigate("Registration", { name: "Registration" });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2BD1FB",
    },
    logo: {
      marginBottom: "5%",
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
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          signIn(values.email, values.password, navigation);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <Image
              style={styles.logo}
              source={require("../assets/logo_darkblue.png")}
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
            <FormButton onPress={handleSubmit} text={"Login"} />
            <RegisterButton onPress={registerButtonPressed} />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
