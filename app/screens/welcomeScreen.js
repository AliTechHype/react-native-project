import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      //   source={require("../assets/testing image.jpg")}
      source={require("../assets/pfp_logo.gif")}
      resizeMode="cover"
    >
      <Image source={require("../assets/plogo.png")} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register Here!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login Here!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 20,
    left: "35%",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: "100%",
  },
  registerButton: {
    flex: 1,
    backgroundColor: "#24a97b",
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#4e9af1",
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
