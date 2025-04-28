import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    blinkAnimation.start();

    return () => {
      blinkAnimation.stop();
    };
  }, [fadeAnim]);

  useEffect(() => {
    let mounted = true;
    let interval;

    const updateProgress = () => {
      if (mounted) {
        setLoadingProgress((prev) => {
          const newProgress = prev + 12.5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => navigation.replace("Login"), 100);
            return 100;
          }
          return newProgress;
        });
      }
    };

    interval = setInterval(updateProgress, 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/QuranVerseOrignalLogo.png")}
        style={[styles.image, { opacity: fadeAnim }]}
      />

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${loadingProgress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
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

export default HomeScreen;
