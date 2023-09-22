import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import MainNavigator from "./src/routes/MainNavigator";

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
