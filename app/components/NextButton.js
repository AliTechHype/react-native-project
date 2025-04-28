import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NextButton = ({ percentage, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NextButton;
