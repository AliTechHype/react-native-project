import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/screen2Image.png")} />
      <Text style={styles.mainTitle}>Learn Your Way</Text>
      <View style={styles.contentBox}>
        <Text style={styles.subtitle}>
          Choose topics that interest you or enroll in tailored courses created
          by experts. Every session is interactive and designed to fit your
          needs.
        </Text>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#E67E22",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  contentBox: {
    // padding: 20,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    lineHeight: 20,
  },
});

export default Screen2;
