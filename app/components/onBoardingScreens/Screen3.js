import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/screen3Image.png")} />
      <Text style={styles.mainTitle}>1-on-1 Classes for Focused Learning</Text>
      <Text style={styles.subtitle}>
        Choose topics that interest you or enroll in tailored courses created by
        experts. Every session is interactive and designed to fit your needs.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27AE60",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  imageText: {
    color: "#196F3D",
  },
  subtitle: {
    fontSize: 16,
    color: "#566573",
    textAlign: "center",
    lineHeight: 20,
  },
});

export default Screen3;
