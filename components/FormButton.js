import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const FormButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width:"80%",
    backgroundColor:"#e05e78",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  buttonText: {
    color: "#fff",
  },
});

export default FormButton;
