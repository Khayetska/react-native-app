import { StyleSheet, ImageBackground, View } from "react-native";
import background from "./../assets/img/background.jpg";

function Background({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        {children}
      </ImageBackground>
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
    justifyContent: "flex-end",
  },
});

export default Background;
