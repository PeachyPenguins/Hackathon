import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FormInput = ({
  placeholder,
  value,
}) => (
  <View style={styles.inputContainer}>
    {/* <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      value={value}
      placeholder={placeholder}
      style={styles.input}
    /> */}

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
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginRight: 10,
  },
  input: {
    padding: 10,
  },
});

export default FormInput;
