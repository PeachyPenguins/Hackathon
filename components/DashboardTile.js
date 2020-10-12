import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#0c3c64",

    elevation: 5,
  },
  cardText: {
    color: "white",
  },
});

const DashboardTile = ({ item }) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Title
        title={item.name}
        subtitle={item.done == true ? "Complete" : "Incomplete"}
        titleStyle={styles.cardText}
        subtitleStyle={styles.cardText}
      />
    </Card>
  </View>
);

export default DashboardTile;
