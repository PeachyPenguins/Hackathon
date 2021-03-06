import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { createStore, applyMiddleware } from "redux";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { LogBox } from "react-native";
import _ from "lodash";

// Navigation
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

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerLeft: null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
