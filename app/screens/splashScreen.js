import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let interval;

    const updateProgress = () => {
      if (mounted) {
        setLoadingProgress((prev) => {
          const newProgress = prev + 12.5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => navigation.replace("Welcome"), 100);
            return 100;
          }
          return newProgress;
        });
      }
    };

    interval = setInterval(updateProgress, 100);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pfp_logo.gif")}
        style={styles.gif}
        resizeMode="contain"
      />
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${loadingProgress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  gif: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 50,
    width: "80%",
    height: 10,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#24a97b",
    borderRadius: 5,
  },
});

export default SplashScreen;
