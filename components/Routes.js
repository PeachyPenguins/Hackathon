import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Dashboard from "./Dashboard";

const Navigator = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
});

const Routes = createAppContainer(Navigator);

export default Routes;
