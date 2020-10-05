import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

export default function App() {
  const rotateValueHolder = new Animated.Value(0);
  const imageUrl = "https://i.imgur.com/19aMNlB.png";
  const changePages = () => {
    console.log("CHANGING PAGES");
  };

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2BD1FB",
      alignItems: "center",
      justifyContent: "space-around",
    },
    logo: {
      width: 200,
      height: 200,
      transform: [{ rotate: rotation }],
    },
    button: {
      alignItems: "center",
      backgroundColor: "#282C34",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
    },
    buttonText: {
      color: "#fff",
    },
    header: {
      fontSize: 30,
      textAlign: "center",
    },
  });

  useEffect(() => {
    startImageRotate();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.logo}
        source={{
          uri: imageUrl,
        }}
      />

      <Text style={styles.header}>Welcome to Covid Analyzer</Text>

      <TouchableOpacity style={styles.button} onPress={changePages}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}
