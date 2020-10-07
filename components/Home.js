import React, { useEffect } from "react";
import { StyleSheet, Text, View, Animated, Easing, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, getData } from "../actions";

// Firebase Import
import firebase from "../firebase";

import FormInput from "./FormInput";
import { Formik } from "formik";
import FormButton from "./FormButton";

export default function Home({ navigation }) {
  // Redux Hooks
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  // Firebase Ref to database
  const database = firebase.database().ref();

  const rotateValueHolder = new Animated.Value(0);

  const imageUrl = "https://i.imgur.com/19aMNlB.png";

  const startImageRotate = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotate());
  };

  const rotation = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handlePressed = () => {
    navigation.navigate("Dashboard", { name: "Dashboard" });
  };

  useEffect(() => {
    startImageRotate();
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
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      marginBottom: 40,
      width: 150,
      height: 150,
      transform: [{ rotate: rotation }],
    },

    header: {
      fontSize: 30,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.logo}
        source={{
          uri: imageUrl,
        }}
      />

      {/* <Text style={styles.header}>Welcome to Covid Analyzer</Text> */}

      <FormInput
        name="email"
        value={""}
        placeholder="Email"
        autoCapitalize="none"
        // onChangeText={}
        iconName="ios-mail"
        iconColor="#2C384A"
      />

      <FormInput
        name="password"
        value={""}
        placeholder="Password"
        autoCapitalize="none"
        // onChangeText={}
        iconName="ios-mail"
        iconColor="#2C384A"
      />

      <FormButton onPress={handlePressed}></FormButton>
    </View>
  );
}
