import React, { useState, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MainHomeScreen from "../../screens/MainHomeScreen";

const { width } = Dimensions.get("window");
// Dummy Screens
const Dummy = ({ name }) => (
  <View style={styles.center}>
    <Text>{name}</Text>
  </View>
);
const MyLearning = () => <Dummy name="My Learning" />;
const Explore = () => <Dummy name="Explore" />;
const Messages = () => <Dummy name="Messages" />;
const Profile = () => <Dummy name="Profile" />;

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <>
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
              <View
                style={renderCenterButton ? styles.centerIconWrapper : null}
              >
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
    </>
  );
};

export default function BottomTabs({ navigation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(-width * 0.7)).current; // sidebar starts hidden (-50% width)

  const toggleSidebar = () => {
    Animated.timing(sidebarAnim, {
      toValue: isSidebarOpen ? -width * 0.7 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    Animated.timing(sidebarAnim, {
      toValue: -width * 0.7,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSidebarOpen(false);
  };
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/userImage.png")}
            style={{ marginRight: 10 }}
          />
          <Icon name="notifications-outline" style={styles.headerTitle}></Icon>
        </View>
      </View>

      {isSidebarOpen && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { left: sidebarAnim }]}>
        <Image
          style={styles.sidebarImage}
          source={require("../../assets/QuranVerseBlueLogo.png")}
        />
        <View style={styles.sidebarContent}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon name="headset-outline" size={20} color={"black"} />

            <Text style={styles.sidebarItem}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon name="settings-outline" size={20} color={"black"} />

            <Text style={styles.sidebarItem}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Icon name="log-out-outline" size={20} color={"black"} />

            <Text style={[styles.sidebarItem, { color: "red" }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#f8f8f8",
    elevation: 3,
    zIndex: 5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 5,
  },
  menuButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "white",
    zIndex: 10,
    paddingTop: 70,
  },
  sidebarContent: {
    paddingHorizontal: 20,
  },
  sidebarItem: {
    color: "black",
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 15,
  },
  sidebarImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
    resizeMode: "contain",
  },
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
  //   tabButton: {
  //     flex: 1,
  //     alignItems: "center",
  //   },
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
