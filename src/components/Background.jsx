import { StyleSheet, ImageBackground, View } from "react-native";
import background from "./../assets/img/background.jpg";

function Background({ children }) {
  const { container, image } = styles;

  return (
    <View style={container}>
      <ImageBackground source={background} style={image} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
  },
});

export default Background;
