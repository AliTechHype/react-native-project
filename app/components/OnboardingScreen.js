import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import SkipButton from "./SkipButton";
import Screen1 from "./onBoardingScreens/Screen1";
import Screen2 from "./onBoardingScreens/Screen2";
import Screen3 from "./onBoardingScreens/Screen3";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    id: "70015177",
    component: <Screen1 />,
    buttonText: "Next",
  },
  {
    id: "70015178",
    component: <Screen2 />,
    buttonText: "Next",
  },
  {
    id: "70015179",
    component: <Screen3 />,
    buttonText: "Get Started",
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("Home");
    }
  };

  const skipOnboarding = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <SkipButton onPress={skipOnboarding} />

      <FlatList
        data={onboardingData}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>{item.component}</View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />

      <View style={styles.footerPaginator}>
        <Paginator data={onboardingData} currentIndex={currentIndex} />
      </View>
      <View style={styles.footer}>
        <NextButton
          onPress={scrollTo}
          percentage={(currentIndex + 1) * (100 / onboardingData.length)}
          text={onboardingData[currentIndex].buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  footerPaginator: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});

export default OnboardingScreen;
