import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const imageUrl = "https://i.imgur.com/19aMNlB.png";
  const changePages = () => {
    console.log("CHANGING PAGES");
    this.RotateValueHolder = new Animated.Value(0);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: imageUrl,
        }}
      />

      <Text style={styles.header}>Welcome to Covid Analyzer</Text>

      <TouchableOpacity style={styles.button} onPress={changePages}>
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
});
