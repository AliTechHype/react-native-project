import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SkipButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
  buttonText: {
    color: "#666",
    fontSize: 16,
  },
});

export default SkipButton;
