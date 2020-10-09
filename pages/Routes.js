import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Registration from "./Registration";

const Navigator = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  Registration: {screen: Registration }
});

const Routes = createAppContainer(Navigator);

export default Routes;
