import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const { width } = Dimensions.get("window");
const initialLayout = { width: Dimensions.get("window").width };

const Card = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDesc}>{description}</Text>
  </View>
);

const pastData = [
  { title: "Job A", description: "Company A (2020 - 2021)" },
  { title: "Job B", description: "Company B (2019 - 2020)" },
  { title: "Job C", description: "Company C (2018 - 2019)" },
];

const educationData = [
  { title: "Bachelors", description: "XYZ University (2015 - 2019)" },
  { title: "Intermediate", description: "ABC College (2013 - 2015)" },
  { title: "Matric", description: "DEF School (2011 - 2013)" },
];

const PastExperienceRoute = () => (
  <View>
    <FlatList
      data={pastData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card title={item.title} description={item.description} />
      )}
    />
  </View>
);

const EducationRoute = () => (
  <View>
    <FlatList
      data={educationData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card title={item.title} description={item.description} />
      )}
    />
  </View>
);

const TutorDetailScreen = ({ navigation }) => {
  const [readMore, setReadMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "past", title: "Past Experience" },
    { key: "education", title: "Education" },
  ]);

  const renderScene = SceneMap({
    past: PastExperienceRoute,
    education: EducationRoute,
  });

  return (
    <>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>

        <Image
          source={require("../assets/tutorLeftTopSideImageIcon.png")}
          style={styles.topImage}
        />
        <Image
          source={require("../assets/userProfileImage.png")}
          style={styles.teacherImage}
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>
            Ahmed Lecturer
          </Text>
          <Text style={styles.belowTitle} numberOfLines={1}>
            Literature, Arabic Language
          </Text>
          <Text style={styles.belowTitle} numberOfLines={1}>
            Liyah, Pakistan
          </Text>
        </View>

        <View style={styles.firststatsRow}>
          <View style={styles.firststatCard}>
            <Icon
              name="time-outline"
              size={20}
              color="#0061E0"
              style={{ textAlign: "center" }}
            />
            <Text style={styles.firststatTitle}>&ensp;$20/hr</Text>
            <Text style={styles.statSub}>&ensp;Rate</Text>
          </View>
          <View style={styles.firststatCard}>
            <Icon
              name="star-outline"
              size={20}
              color="#0061E0"
              style={{ textAlign: "center" }}
            />
            <Text style={styles.firststatTitle}>&ensp;&nbsp;4.7 {""}</Text>
            <Text style={styles.statSub}>Ratings</Text>
          </View>
          <View style={styles.firststatCard}>
            <Icon
              name="headset-outline"
              size={20}
              color="#0061E0"
              style={{ textAlign: "center" }}
            />
            <Text style={styles.firststatTitle}>&ensp;&ensp;54</Text>
            <Text style={styles.statSub}>Sessions</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.firstenrollButton}>
            <Icon name="calendar-outline" color="white" size={20} />
            <Text style={styles.firstenrollButtonText}>
              &nbsp; Schedule a Lesson
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.enrollButton}>
            <Icon
              name="chatbubble-ellipses-outline"
              color="#0061E1"
              size={20}
            />
            <Text style={styles.enrollButtonText}>&nbsp; Chat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text
            style={styles.description}
            numberOfLines={readMore ? undefined : 2}
          >
            Narrated Uthman bind Affan: The Prophet said, “The most superior
            among you are those who learn the Quran and teach it”.
          </Text>
          <Text style={styles.readMore} onPress={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More"}
          </Text>
        </View>

        <Text style={styles.Teachestitle}>Teaches</Text>

        <View style={styles.teachesRow2}>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>&ensp;5/5</Text>
            <Text style={styles.statSub}>&ensp;Recitation</Text>
          </View>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>&ensp;&nbsp;5/5 {""}</Text>
            <Text style={styles.statSub}>Tajweed</Text>
          </View>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>&ensp;&ensp;5/5</Text>
            <Text style={styles.statSub}>Arabic</Text>
          </View>
        </View>

        <Text style={styles.Teachestitle}>Languages</Text>

        <View style={styles.teachesRow2}>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>&ensp;Arabic</Text>
          </View>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>English {""}</Text>
          </View>
          <View style={styles.firststatCardTeachessection}>
            <Text style={styles.firststatTitle}>&ensp;&ensp;Urdu</Text>
          </View>
        </View>

        <View style={{ height: 500 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: "#0061E1" }}
                style={{ backgroundColor: "white" }}
                activeColor="#0061E1"
                inactiveColor="#666"
                labelStyle={{ fontWeight: "bold" }}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default TutorDetailScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 200,
    left: 0,
    right: 0,
  },
  imageContainer: {
    position: "relative",
    height: "100%",
    backgroundColor: "#F2F2F2",
  },
  topImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: 230,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 8,
    color: "black",
  },
  header: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
    marginLeft: "37%",
  },
  belowTitle: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#000",
    marginLeft: "37%",
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
    top: 150,
    width: 120,
    height: 120,
    borderRadius: 30,
    marginLeft: 20,
    zIndex: 9999,
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
    color: "#000",
  },
  firststatsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginBottom: 5,
  },
  teachesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 5,
  },
  teachesRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  firststatCard: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  firststatCardTeachessection: {
    flexDirection: "column",
    width: width * 0.3,
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRightWidth: 0.5,
    borderColor: "grey",
  },
  firststatTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
    color: "#000",
  },
  statSub: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
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
  Teachestitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
    marginLeft: 16,
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
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopColor: "#eee",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 10,
  },
  firstenrollButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  firstenrollButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  enrollButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#0061E1",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  enrollButtonText: {
    color: "#0061E1",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 10,
    margin: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
