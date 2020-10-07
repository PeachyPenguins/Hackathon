import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const FormButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
});

export default FormButton;
