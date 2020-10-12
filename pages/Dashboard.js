import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Item } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { authorized, notAuthorized, getOrders } from "../actions";
import firebase from "../services/firebase";

const Dashboard = (props) => {
  const navigationOptions = { title: "Dashboard" };
  const { navigate } = props.navigation;

  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

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
      backgroundColor: "pink",
      fontSize: 16,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: "#e84c4c",
      alignItems: "center"
    },
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(authorized());
      } else {
        dispatch(notAuthorized());
      }
    });

    dispatch(getOrders());
  }, []);

  console.log("REDUX STATE", state.orders);

  return (
    <View style={styles.container}>
      {/* <Text>Dashboard Page</Text> */}
      <ActionButton
        buttonColor={styles.actionButtonIcon.color}
        onPress={() => {
          console.log("hi");
        }}

      />
      {/* {state.isAuthenticated ? (
        <>
          <Text>USER AUTHENTICATED</Text>
          <FlatList
            data={state.orders}
            renderItem={({ item }) => (
              <Text >{item.name.toString()}</Text>
            )}
          />
        </>
      ) : (
        navigate("Login")
      )} */}
    </View>
  );
};

export default Dashboard;
