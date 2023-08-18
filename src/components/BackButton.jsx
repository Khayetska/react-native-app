import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  handleBackPress = () => navigation.navigate("Posts");
  return (
    <TouchableOpacity
      onPress={handleBackPress}
      style={{ left: 16 }}
      activeOpacity={0.6}
    >
      <Feather name="arrow-left" size={24} color="#212121CC" />
    </TouchableOpacity>
  );
}
