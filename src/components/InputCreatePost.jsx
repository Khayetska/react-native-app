import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputCreatePost({
  onChange,

  placeholder,
  isLeftPadding = false,
}) {
  const [isActive, setIsActive] = useState(false);

  const onFocus = () => setIsActive(true);

  const onBlur = () => setIsActive(false);

  const inputStyleName = isActive
    ? [styles.input, styles.input_active]
    : styles.input;

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={"#BDBDBD"}
      style={[inputStyleName, isLeftPadding && { paddingLeft: 28 }]}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  input_active: {
    borderBottomColor: "#FF6C00",
  },
});
