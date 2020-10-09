import React from "react";
import Login from "./pages/Login";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { LogBox } from "react-native";
import _ from "lodash";
import { retrieveData } from "./services/localStorage";

// Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./pages/Dashboard";

const Stack = createStackNavigator();

LogBox.ignoreLogs(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  // Using thunk middleware for asynchronous calls
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  var startScreen;
  var otherScreen;
  var isSignedIn = retrieveData();
  //TODO: FIX THIS SO IT USES A NON-APP ASYNC FUNC
  if (isSignedIn === "true") {
    console.log("Going to Dashboard Page")
    console.log(isSignedIn);
    startScreen = <Stack.Screen name="Dashboard" component={Dashboard} />;
    otherScreen = (
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Welcome" }}
      />
    );
  } else {
    console.log("Going to Login Page")
    console.log(isSignedIn);
    startScreen = (
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Welcome" }}
      />
    );
    otherScreen = <Stack.Screen name="Dashboard" component={Dashboard} />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {startScreen} 
          {otherScreen}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
