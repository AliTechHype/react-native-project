import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/QuranVerseOrignalLogo.png")}
        alt="Quran Verse White Logo"
      ></Image>
      <Text style={styles.mainTitle}>Welcome to</Text>
      <Text style={styles.subtitle}>
        Discover the joy of personalized Islamic learning. Connect with
        experienced teachers to deepen your understanding of the Quran, Arabic,
        and more.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E86C1",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#5D6D7E",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default Screen1;
