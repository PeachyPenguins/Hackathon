import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#e05e78",
    borderRadius: 5,
    height: "11%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

const FormButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
);

export default FormButton;
