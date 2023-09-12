import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function UserPhoto() {
  return (
    <View style={styles.user_img_wrapper}>
      <Image style={styles.user_img} />
      <TouchableOpacity style={styles.icon_wrapper}>
        <EvilIcons name="plus" size={36} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  user_img_wrapper: {
    position: "absolute",
    top: -60,
  },
  user_img: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon_wrapper: {
    position: "absolute",
    bottom: 12,
    right: -17,
  },
});
