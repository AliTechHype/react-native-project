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

const { width } = Dimensions.get("window");

const MainHomeScreen = ({ navigation }) => {
  const goToCourseDetailPage = () => {
    console.log("curse detail page request");
    navigation.navigate("course-details");
  };

  const goToTutorDetailPage = () => {
    console.log("tutor detail page request");
    navigation.navigate("tutor-details");
  };
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

        {/* Upcoming classes */}
        <SectionTitle title="Upcoming Classes" onPress={() => {}} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <UpcomingClassesCard onPress={() => {}} />
          <UpcomingClassesCard onPress={() => {}} />
          <UpcomingClassesCard onPress={() => {}} />
          <UpcomingClassesCard onPress={() => {}} />
        </ScrollView>

        {/* Popular Courses */}
        <SectionTitle title="Popular Courses" onPress={() => {}} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard onPress={goToCourseDetailPage} />
          <CourseCard onPress={goToCourseDetailPage} />
          <CourseCard onPress={goToCourseDetailPage} />
          <CourseCard onPress={goToCourseDetailPage} />
        </ScrollView>

        {/* Popular Tutors */}
        <SectionTitle title="Popular Tutors" onPress={() => {}} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TutorCard onPress={goToTutorDetailPage} />
          <TutorCard onPress={goToTutorDetailPage} />
          <TutorCard onPress={goToTutorDetailPage} />
          <TutorCard onPress={goToTutorDetailPage} />
          <TutorCard onPress={goToTutorDetailPage} />
          <TutorCard onPress={goToTutorDetailPage} />
        </ScrollView>

        {/* Recommended */}
        <SectionTitle title="Recommended" onPress={() => {}} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 30 }}
        >
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
        </ScrollView>
      </ScrollView>
    </>
  );
};

// Section title with See All button
const SectionTitle = ({ title, onPress }) => (
  <TouchableOpacity style={styles.sectionTitle}>
    <Text style={styles.sectionText}>{title}</Text>
    <TouchableOpacity onPress={onPress} style={styles.seeAllAbove}>
      <Text style={styles.seeAll}>See All</Text>
      <Icon name="chevron-forward" size={11} style={styles.seeAllIcon}></Icon>
    </TouchableOpacity>
  </TouchableOpacity>
);

// Upcoming classes card
const UpcomingClassesCard = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.upcomingCard} onPress={onPress}>
      <Image
        source={require("../assets/quranImage.png")}
        style={styles.instructorImage}
      />
      <Text style={styles.instructorName}>Ahmed Ali Bukhari</Text>
      <View style={styles.bottomRow}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Nov 06,</Text>
          <Text style={styles.dateText}>02:00 pm</Text>
        </View>
        <View style={styles.circleTimer}>
          <View style={styles.innerCircle}>
            <Text style={styles.timerText}>00:50</Text>
          </View>
        </View>
      </View>
      <View style={styles.sessionsRow}>
        <Text style={styles.sessionText}>Sessions 2/7</Text>
        <Text style={styles.classText}>Time left in Class</Text>
      </View>
    </TouchableOpacity>
  );
};

// Sample Course Card
const CourseCard = ({ onPress }) => (
  <TouchableOpacity style={styles.courseCard} onPress={onPress}>
    <Image
      //   source={{ uri: "https://via.placeholder.com/150" }}
      source={require("../assets/quranImage.png")}
      style={styles.courseImage}
    />
    <Text style={styles.cardTitle}>Online Quran Reading For Kids</Text>
    <Text style={styles.cardSubText}>⭐ 5.0 </Text>
    <Text style={styles.cardSubTutorText}>
      {" "}
      <Icon name="school-outline" size={15} /> Ahmed Ali Bukhari
    </Text>
    <Text style={styles.cardSubText}>
      <Icon name="time-outline" size={15} style={{ marginTop: 5 }} /> 30 Days |
      &ensp;&ensp;
      <Text style={{ color: "#007bff", fontSize: 15, padding: 0 }}>
        $ 55
      </Text>{" "}
      &ensp; | &ensp;&ensp;{" "}
      <Icon name="documents-outline" size={15} style={{ padding: 0 }} /> 25
      Lectures
    </Text>
  </TouchableOpacity>
);

// Sample Tutor Card
const TutorCard = ({ onPress }) => (
  <TouchableOpacity style={styles.tutorCard} onPress={onPress}>
    <View style={styles.tutorTopSection}>
      <Image
        source={require("../assets/userImage.png")}
        style={styles.tutorImage}
      />
      <View style={styles.tutorInfo}>
        <Text style={styles.tutorName}>Ahmed Ali Bukhari</Text>
        <Text style={styles.tutorLocation}>Liyah, Pakistan</Text>
        <Text style={styles.tutorSubjects}>Recitation, Arabic, Tajweed...</Text>
      </View>
    </View>
    <View style={styles.tutorBottomSection}>
      <View style={styles.tutorStat}>
        <Text style={styles.statIcon}>⭐</Text>
        <Text style={styles.statText}>5.0 | </Text>
      </View>
      <View style={styles.tutorStat}>
        {/* <Text style={styles.statIcon}>  </Text> */}
        <Text style={styles.statPrice}>$ 10/hr </Text>
      </View>
      <View style={styles.tutorStat}>
        <Text style={styles.statIcon}>
          | <Icon name="calendar-outline" />
        </Text>
        <Text style={styles.statText}>13 Total Sessions</Text>
      </View>
    </View>
  </TouchableOpacity>
);
const RecommendedCourseCard = ({ onPress }) => (
  <TouchableOpacity style={styles.recommendedcourseCard} onPress={onPress}>
    <Image
      //   source={{ uri: "https://via.placeholder.com/150" }}
      source={require("../assets/quranImage.png")}
      style={styles.recommendedcourseImage}
    />
    <Text style={styles.recommendedcardTitle}>
      Online Quran Reading For Kids
    </Text>
    <Text style={styles.recommendedcardSubText}>
      ⭐ 5.0 · Ahmed Ali Bukhari
    </Text>
    <Text style={styles.recommendedcardSubText}>
      📅 30 Days · 💵 $55 · 📚 25 Lectures
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
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
    marginVertical: 6,
  },
  cardSubText: {
    fontSize: 12,
    color: "#555",
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardSubTutorText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
  },
  recommendedcourseCard: {
    width: width * 0.7,
    marginRight: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  recommendedcourseImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  recommendedcardTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 6,
  },
  recommendedcardSubText: {
    fontSize: 12,
    color: "#555",
  },
  tutorCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
    width: 250,
    // elevation: 2,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
  },
  tutorTopSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  tutorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  tutorInfo: {
    flex: 1,
  },
  tutorName: {
    color: "#007bff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
  tutorLocation: {
    color: "#555",
    fontSize: 12,
    marginBottom: 2,
  },
  tutorSubjects: {
    color: "#777",
    fontSize: 12,
  },
  tutorBottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },
  tutorStat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    fontSize: 14,
    marginRight: 4,
    color: "#777",
  },
  statText: {
    fontSize: 12,
    color: "#555",
  },
  statPrice: {
    fontSize: 12,
    color: "#007bff",
    fontWeight: "bold",
  },
  upcomingCard: {
    width: width * 0.6,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#f9f9f9",
    marginRight: 16,
    // alignItems: "center",
  },
  instructorImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 6,
  },
  dateBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  dateText: {
    color: "#007bff",
    fontSize: 13,
    fontWeight: "600",
  },
  circleTimer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 12,
    color: "#007bff",
    fontWeight: "600",
  },
  sessionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 4,
  },
  sessionText: {
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },
  classText: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
});

export default MainHomeScreen;
