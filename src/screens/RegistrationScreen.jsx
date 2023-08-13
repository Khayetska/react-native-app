import { StyleSheet, ImageBackground, View } from "react-native";
import background from "./../assets/img/background.jpg";
import EntryForm from "../components/EntryForm";

const RegistrationScreen = () => {
  const { container, image } = styles;

  return (
    <View style={container}>
      <ImageBackground source={background} style={image}></ImageBackground>
      <EntryForm register />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "flex-end",
  },
});

export default RegistrationScreen;
