import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useSelector } from "react-redux";
import { storeData } from "../services/localStorage";

const Dashboard = (props) => {
  const navigationOptions = { title: "Dashboard" };
  const { navigate } = props.navigation;

  const state = useSelector((state) => state.state);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      marginTop: 24,
      padding: 10,
      backgroundColor: "pink",
      fontSize: 16,
    },
  });

  function signOut() {
    storeData("false");
  }
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {state.covidData.length > 0
          ? state.covidData.map((item) => (
              <View key={item.Slug}>
                <Text style={styles.item}>
                  ({item.Country}) Total Deaths: {item.TotalDeaths}
                </Text>
              </View>
            ))
          : null}
      </ScrollView> */}
      <Button
        onPress={() => storeData("false")}
        title="Sign Out"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Dashboard;
