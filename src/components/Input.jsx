import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, secureTextEntry = false }) {
  const [isActive, setIsActive] = useState(false);

  const onFocus = () => setIsActive(true);

  const onBlur = () => setIsActive(false);

  const inputStyleName = isActive
    ? [styles.input, styles.input_active]
    : styles.input;

  return (
    <TextInput
      style={inputStyleName}
      placeholder={placeholder}
      placeholderTextColor={"#BDBDBD"}
      onFocus={onFocus}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,

    fontWeight: "400",
    fontSize: 16,
    color: "#000",
  },
  input_active: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },
});
