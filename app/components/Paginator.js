import React from "react";
import { View, StyleSheet } from "react-native";

const Paginator = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 64,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    width: 8,
    alignContent: "center",
  },
  dotActive: {
    backgroundColor: "#4A90E2",
    width: 16,
  },
  dotInactive: {
    backgroundColor: "#E0E0E0",
  },
});

export default Paginator;
