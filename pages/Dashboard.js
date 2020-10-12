import React, { useEffect } from "react";
import { StyleSheet, View,  FlatList, } from "react-native";
import ActionButton from "react-native-action-button";
import DashboardTile from "../components/DashboardTile";
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
      paddingHorizontal: 10,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: "#e84c4c",
      alignItems: "center",
      position: 'absolute',
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

      <FlatList
        data={state.orders}
        renderItem={({ item }) => <DashboardTile item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* {state.isAuthenticated ? 
        <>
          <Text>USER AUTHENTICATED</Text>
          <FlatList
        data={state.orders}
        renderItem={({ item }) => <Text>{item.name} </Text>}
        keyExtractor={(item, index) => index.toString()}
      />
        </>
       : 
        navigate("Login")
      } */}
    </View>
  );
};

export default Dashboard;
