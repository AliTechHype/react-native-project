import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(-width * 0.5)).current; // sidebar starts hidden (-50% width)

  const toggleSidebar = () => {
    Animated.timing(sidebarAnim, {
      toValue: isSidebarOpen ? -width * 0.5 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { left: sidebarAnim }]}>
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarItem}>Dashboard</Text>
          <Text style={styles.sidebarItem}>Profile</Text>
          <Text style={styles.sidebarItem}>Settings</Text>
          <Text style={styles.sidebarItem}>Logout</Text>
        </View>
      </Animated.View>

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#f8f8f8",
    elevation: 3,
    zIndex: 5,
  },
  menuButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.5,
    backgroundColor: "#007bff",
    zIndex: 10,
    paddingTop: 100,
  },
  sidebarContent: {
    paddingHorizontal: 20,
  },
  sidebarItem: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
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
