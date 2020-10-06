import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Alert,
} from "react-native";

export default function App() {
  const [userLocation, setUserLocation] = useState("");
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

  const findCoordinates = () => {
    // console.log("Props", props, "Navigating");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        setUserLocation(location);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

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

  console.log("USER LOCATION", userLocation);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.logo}
        source={{
          uri: imageUrl,
        }}
      />

      <Text style={styles.header}>Welcome to Covid Analyzer</Text>

      <TouchableOpacity style={styles.button} onPress={findCoordinates}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}
