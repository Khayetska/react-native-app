import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
// import HomeScreen from "../screens/HomeScreen";
import BottomNavigator from "./BottomNavіgator";
import CommentsScreen from "../screens/CommentsScreen";
// import LoginScreen from "../screens/LoginScreen";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: "500",
              lineHeight: 22,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
