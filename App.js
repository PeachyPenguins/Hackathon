import React from "react";
import Login from "./components/Login";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import Routes from "./components/Routes";

// Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./components/Dashboard";

const Stack = createStackNavigator();

export default function App() {
  // Using thunk middleware for asynchronous calls
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
