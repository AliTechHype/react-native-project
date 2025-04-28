import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // or any other icon set you prefer

const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginSubmit = async () => {
    // if (email === "aliraza.dev4@gmail.com" && password === "333") {
    navigation.navigate("BottomTabs");
    // } else {
    //   console.log(" not allowed");
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Image
        source={require("../assets/QuranVerseOrignalLogo.png")}
        style={styles.image}
      />
      <Text style={styles.header}>Let's sign you in</Text>
      <Text style={styles.subheader}>
        Enter the email/phone and password you used to register.
      </Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          {/* <Text style={styles.inputLabel}>Email/Phone</Text> */}
          <View style={styles.inputWithIcon}>
            <Icon
              name="email"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email/Phone"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          {/* <Text style={styles.inputLabel}>Password</Text> */}
          <View style={styles.inputWithIcon}>
            <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={loginSubmit}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialContainer}>
        <Image
          source={require("../assets/googleIcon.png")}
          style={styles.imageSocials}
        />
        <Image
          source={require("../assets/appleIcon.png")}
          style={styles.imageSocials}
        />
        <Image source={require("../assets/facebookIcon.png")} />
      </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Haven't signed up yet? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupLink}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  image: {
    alignContent: "center",
    marginHorizontal: 90,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    textAlign: "left",
  },
  subheader: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginBottom: 32,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  inputIcon: {
    padding: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingRight: 15,
  },
  eyeIcon: {
    padding: 15,
  },
  loginButton: {
    backgroundColor: "#4e9af1",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },
  dividerText: {
    width: 40,
    textAlign: "center",
    color: "#999",
    fontSize: 14,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  signupText: {
    color: "#666",
    fontSize: 13,
  },
  signupLink: {
    color: "#4e9af1",
    fontSize: 14,
    fontWeight: "600",
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: "30%",
  },
  imageSocials: {
    marginRight: 50,
  },
});

export default LoginScreen;
