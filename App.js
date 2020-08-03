import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: Home,
    defaultNavigationOptions: {
      title: ToDoAPP,
    },
  }
);

export default createAppContainer(Navigator);
