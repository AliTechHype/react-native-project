import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MainHomeScreen from "../../screens/MainHomeScreen";

// Dummy Screens
const Dummy = ({ name }) => (
  <View style={styles.center}>
    <Text>{name}</Text>
  </View>
);
const MyLearning = () => <Dummy name="My Learning" />;
const Explore = () => <Dummy name="Explore" />;
const Home = () => <Dummy name="Home" />;
const Messages = () => <Dummy name="Messages" />;
const Profile = () => <Dummy name="Profile" />;

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const icons = {
          MyLearning: "book-outline",
          Explore: "globe-outline",
          Home: "home",
          Messages: "chatbox-outline",
          Profile: "person-outline",
        };

        const icon = icons[route.name];

        const renderCenterButton = isFocused;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            activeOpacity={0.9}
            style={
              renderCenterButton ? styles.centerTabButton : styles.tabButton
            }
          >
            <View style={renderCenterButton ? styles.centerIconWrapper : null}>
              <Icon
                name={icon}
                size={renderCenterButton ? 28 : 24}
                color={isFocused ? "white" : "#aaa"}
              />
              {!renderCenterButton && (
                <Text
                  style={{
                    fontSize: 10,
                    color: isFocused ? "black" : "#555",
                  }}
                >
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="MyLearning" component={MyLearning} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={MainHomeScreen} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    elevation: 10,
    paddingBottom: 10,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  centerTabButton: {
    top: -20,
    backgroundColor: "#007bff",
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  centerIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
