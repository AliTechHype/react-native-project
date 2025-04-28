import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTabs from "../components/NavigationFooter/BottomTab";

const { width } = Dimensions.get("window");

const MainHomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#888"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search Courses or Tutor"
            style={styles.searchInput}
          />
        </View>

        {/* Popular Courses */}
        <SectionTitle title="Popular Courses" onPress={() => {}} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ScrollView>

        {/* Popular Tutors */}
        <SectionTitle title="Popular Tutors" onPress={() => {}} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
        </ScrollView>

        {/* Recommended */}
        <SectionTitle title="Recommended" onPress={() => {}} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 30 }}
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ScrollView>
      </ScrollView>
    </>
  );
};

// Section title with See All button
const SectionTitle = ({ title, onPress }) => (
  <View style={styles.sectionTitle}>
    <Text style={styles.sectionText}>{title}</Text>
    <TouchableOpacity onPress={onPress} style={styles.seeAllAbove}>
      <Text style={styles.seeAll}>See All</Text>
      <Icon name="chevron-forward" size={11} style={styles.seeAllIcon}></Icon>
    </TouchableOpacity>
  </View>
);

// Sample Course Card
const CourseCard = () => (
  <View style={styles.courseCard}>
    <Image
      source={{ uri: "https://via.placeholder.com/150" }}
      style={styles.courseImage}
    />
    <Text style={styles.cardTitle}>Online Quran Reading For Kids</Text>
    <Text style={styles.cardSubText}>⭐ 5.0 · Ahmed Ali Bukhari</Text>
    <Text style={styles.cardSubText}>📅 30 Days · 💵 $55 · 📚 25 Lectures</Text>
  </View>
);

// Sample Tutor Card
const TutorCard = () => (
  <View style={styles.tutorCard}>
    <Image
      source={{ uri: "https://via.placeholder.com/80" }}
      style={styles.tutorImage}
    />
    <Text style={styles.cardTitle}>Ahmed Ali Bukhari</Text>
    <Text style={styles.cardSubText}>📍Liyah, Pakistan</Text>
    <Text style={styles.cardSubText}>🗣 Recitation, Arabic</Text>
    <Text style={styles.cardSubText}>💰 $10/hr · 🎓 13 Sessions</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllAbove: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: "#007bff",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "space-evenly",
  },
  seeAll: {
    fontSize: 12,
    color: "#007bff",
  },
  seeAllIcon: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    color: "#007bff",
  },
  courseCard: {
    width: width * 0.7,
    marginRight: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  courseImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  tutorCard: {
    width: width * 0.5,
    marginRight: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  tutorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 4,
  },
  cardSubText: {
    fontSize: 12,
    color: "#555",
  },
});

export default MainHomeScreen;
