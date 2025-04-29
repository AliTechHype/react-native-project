import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const CourseDetailScreen = ({ navigation }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
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

        {/* Title & Rating */}
        <View style={styles.header}>
          <Text style={styles.title}>Online Quran Reading For Kids</Text>
          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" color="#FFD700" size={16} />
            ))}
            <Text style={styles.ratingText}>5.0 (10)</Text>
          </View>
        </View>

        {/* Teacher Info */}
        <View style={styles.teacherRow}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.teacherImage}
          />
          <Text style={styles.teacherName}>Ahmed Ali Bukhari</Text>
        </View>

        {/* Duration and Sessions */}
        <View style={styles.firststatsRow}>
          <View style={styles.firststatCard}>
            <Icon name="time-outline" size={20} color="grey" />
            <Text style={styles.firststatTitle}>&ensp;30 Days</Text>
          </View>
          <View style={styles.firststatCard}>
            <Icon name="documents-outline" size={20} color="grey" />
            <Text style={styles.firststatTitle}>&ensp;25 Sessions</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Icon name="calendar-outline" size={20} color="#007bff" />
            <View>
              <Text style={styles.statTitle}>&ensp; Published</Text>
              <Text style={styles.statSub}>{""}12 Sep 2022</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Icon name="people-outline" size={20} color="#007bff" />
            <View>
              <Text style={styles.statTitle}>&ensp; Enrolled</Text>
              <Text style={styles.statSub}>{""}1,202 Students</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text
            style={styles.description}
            numberOfLines={readMore ? undefined : 3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text style={styles.readMore} onPress={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More"}
          </Text>
        </View>

        {/* Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content</Text>
          <View style={styles.contentCard}>
            {["Introduction", "Lorem Ipsum", "Lorem Ipsum", "Assignment"].map(
              (item, index) => (
                <View key={index} style={styles.contentRow}>
                  <Icon name="document-outline" size={20} color="#007bff" />
                  <Text style={styles.contentText}>{item}</Text>
                </View>
              )
            )}
          </View>
        </View>
      </ScrollView>

      {/* Enroll Footer */}
      <View style={styles.footer}>
        <Text style={styles.price}>$200.00</Text>
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CourseDetailScreen;

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
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
    width: "60%",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    marginBottom: 12,
    width: "40%",
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#555",
  },
  teacherRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  teacherImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  teacherName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  statCard: {
    flexDirection: "row",
    // width: width * 0.44,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
  },
  statTitle: {
    fontSize: 14,
    fontWeight: "600",
    // marginTop: 8,
    color: "#000",
  },
  firststatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 60,
  },
  firststatCard: {
    flexDirection: "row",
    // width: width * 0.25,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
  },
  firststatTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
    color: "#000",
  },
  statSub: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
    marginLeft: 10,
    alignSelf: "center",
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  readMore: {
    color: "#007bff",
    fontWeight: "600",
    textDecorationLine: "underline",
    cursor: "pointer",
  },
  contentCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  contentText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 10,
  },
  enrollButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  enrollButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
