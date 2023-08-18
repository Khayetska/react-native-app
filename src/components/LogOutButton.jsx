import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LogOutButton() {
  const navigation = useNavigation();

  handleLogout = () => navigation.navigate("Login");

  return (
    <TouchableOpacity
      onPress={handleLogout}
      style={{ right: 16 }}
      activeOpacity={0.6}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
}
