import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FormInput = ({ placeholder, value }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor="#e05e78"
      autoCapitalize="none"
      //  onChangeText = {this.handleEmail}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  iconStyle: {
    marginRight: 10,
  },
  input: {
    height: 50,
    color: "white",
  },
});

export default FormInput;
