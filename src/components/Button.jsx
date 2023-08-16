import { TouchableHighlight, Text, StyleSheet } from "react-native";

function Button({ onPress, underlayColor, text, disabled = false }) {
  const disabledButtonStyle = [styles.button, styles.disabled_button];
  const disabledTextStyle = [styles.button_text, styles.disabled_button_text];

  const btnStyleName = disabled ? disabledButtonStyle : styles.button;

  const textStyleName = disabled ? disabledTextStyle : styles.button_text;

  return (
    <TouchableHighlight
      style={btnStyleName}
      onPress={onPress}
      underlayColor={underlayColor}
    >
      <Text style={textStyleName}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    borderRadius: 100,

    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  disabled_button: {
    backgroundColor: "#F6F6F6",
  },
  disabled_button_text: {
    color: "#BDBDBD",
  },
});

export default Button;
