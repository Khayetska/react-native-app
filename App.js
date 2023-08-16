import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PostsScreen from "./src/screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
    </NavigationContainer>
  );
}
