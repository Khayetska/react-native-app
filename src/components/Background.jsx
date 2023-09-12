import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import background from "./../assets/img/background.jpg";
import React from "react";

function Background({ children }) {
  const componentCheck = children.type.name === "EntryForm";

  return componentCheck ? (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={background} style={styles.image}>
            {children}
          </ImageBackground>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        {children}
      </ImageBackground>
    </SafeAreaView>
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
    resizeMode: "cover",
  },
});

export default Background;
