import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ placeholder, secureEntry , max}) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureEntry}
      style={styles.input}
      maxLength={max}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 6,
    borderColor: "#F5F5F8",
    paddingLeft: 15,
    borderRadius: 6,
    backgroundColor: "#F5F5F8",
    marginTop: 10,
  },
});
