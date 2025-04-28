import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CourseDetailScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Quran Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/quranImage.png")}
          style={styles.topImage}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          {/* <Icon name="arrow-back" size={24} color="#fff" /> */}
          <Icon name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Course Title & Teacher */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>Online Quran Reading For Kids</Text>

        <View style={styles.teacherInfo}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.teacherImage}
          />
          <Text style={styles.teacherName}>Ahmed Ali Bukhari</Text>
        </View>

        {/* Days and Sessions Completed */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Icon name="time-outline" size={24} color="#4A90E2" />
            <Text style={styles.statNumber}>10/30</Text>
            <Text style={styles.statLabel}>Days Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Icon name="book-outline" size={24} color="#4A90E2" />
            <Text style={styles.statNumber}>10/25</Text>
            <Text style={styles.statLabel}>Sessions Completed</Text>
          </View>
        </View>

        {/* Remaining Content */}
        <Text style={styles.remainingTitle}>Remaining Content</Text>
        <View style={styles.contentCard}>
          {["Introduction", "Lorem Ipsum", "Lorem Ipsum", "Assignment"].map(
            (item, index) => (
              <View key={index}>
                <View style={styles.contentItem}>
                  <Icon
                    name="document-text-outline"
                    size={20}
                    color="#4A90E2"
                  />
                  <Text style={styles.contentText}>{item}</Text>
                </View>
                <HorizontalBar
                  height={1}
                  color="lightgrey"
                  style={{ marginVertical: 3, marginBottom: 10 }}
                />
              </View>
            )
          )}
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Class</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notifyButton}>
          <Text style={styles.notifyButtonText}>
            Notify Teacher About Class
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CourseDetailScreen;

const HorizontalBar = ({ height, color, style }) => {
  return (
    <View
      style={[
        styles.horizontalBar,
        { height: height, backgroundColor: color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
  },
  topImage: {
    width: "100%",
    height: 250,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 8,
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  teacherInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  teacherImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    width: "47%",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
  remainingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentCard: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    // borderBottomColor: "grey",
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contentText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
  joinButton: {
    backgroundColor: "#0066FF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  notifyButton: {
    borderColor: "#0066FF",
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  notifyButtonText: {
    color: "#0066FF",
    fontSize: 16,
    fontWeight: "bold",
  },
  horizontalBar: {
    width: "100%",
  },
});
