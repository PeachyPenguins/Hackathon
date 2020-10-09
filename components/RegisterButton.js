import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";


const styles = StyleSheet.create({
    button: {
      width: "80%",
      backgroundColor: "#d3d3d3",
      borderRadius: 5,
      height: "11%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
    },
    buttonText: {
      color: "#fff",
    },
});

const RegisterButton = ({ onPress }) => (
    <TouchableOpacity style = {styles.button} onPress = {onPress}>
        <Text style = {styles.buttonText}> Register </Text>
    </TouchableOpacity>
);

export default RegisterButton;

