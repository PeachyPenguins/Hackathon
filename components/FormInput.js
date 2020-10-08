import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 5,
    height: "11%",
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
    opacity: 0.8,
    borderWidth: 0
  },
  iconStyle: {
    marginRight: 10,
  },
  input: {
    height: 50,
    color: "white",
  },
});

const FormInput = ({ value, onChangeText, onBlur, placeholder }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor="white"
      autoCapitalize="none"
      onChangeText={onChangeText}
      value={value}
      onBlur={onBlur}
      selectionColor={'white'}
    />
  </View>
);

export default FormInput;
