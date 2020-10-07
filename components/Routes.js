import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./Home";
import Dashboard from "./Dashboard";

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Dashboard: { screen: Dashboard },
});

const Routes = createAppContainer(Navigator);

export default Routes;
