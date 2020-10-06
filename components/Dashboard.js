import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const navigationOptions = { title: "Dashboard" };
  const { navigate } = props.navigation;

  const state = useSelector((state) => state.state);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    item: {
      marginTop: 24,
      padding: 10,
      backgroundColor: "grey",
      fontSize: 16,
    },
  });

  console.log("REDUX STATE", state.covidData);
  return (
    <View style={styles.container}>
      <ScrollView>
        {state.covidData.length > 0
          ? state.covidData.map((item) => (
              <View key={item.Slug}>
                <Text style={styles.item}>
                  ({item.Country}) Total Deaths: {item.TotalDeaths}
                </Text>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
