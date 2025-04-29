// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   View,
//   SafeAreaView,
//   Platform,
//   StatusBar as RNStatusBar,
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import WelcomeScreen from "./app/screens/welcomeScreen";
// import RegisterScreen from "./app/screens/registerScreen";
// import LoginScreen from "./app/screens/loginScreen";
// import SplashScreen from "./app/screens/splashScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           <Stack.Navigator
//             screenOptions={{
//               headerShown: true,
//             }}
//             initialRouteName="Splash"
//           >
//             <Stack.Screen name="Splash" component={SplashScreen} />
//             <Stack.Screen name="Welcome" component={WelcomeScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//           </Stack.Navigator>
//           <StatusBar style="auto" />
//         </View>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
//     backgroundColor: "#ffff",
//   },
//   container: {
//     flex: 1,
//   },
// });

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./app/components/OnboardingScreen";
import HomeScreen from "./app/screens/MainIndex";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterScreen from "./app/screens/registerScreen";
import LoginScreen from "./app/screens/loginScreen";
import MainHomeScreen from "./app/screens/MainHomeScreen";
import BottomTabs from "./app/components/NavigationFooter/BottomTab";
import CourseDetailScreen from "./app/screens/CourseDetailScreen";
import TutorDetailScreen from "./app/screens/TutorDetailScreen";
import Chat from "./app/screens/UserMessagesScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(true);

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch && (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="welcomeHome" component={MainHomeScreen} />

        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="chat-messages" component={Chat} />
        <Stack.Screen
          name="course-details"
          component={CourseDetailScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="tutor-details"
          component={TutorDetailScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
