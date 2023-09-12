import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PostDetails({
  image,
  title,
  commentsNumber,
  likesNumber,
  location,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.post_wrapper}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.text, styles.post_title]}>{title}</Text>
      <View style={styles.post_info}>
        <View style={styles.post_statistics}>
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <View style={styles.post_reactions}>
              <Feather name="message-circle" size={24} color="#FF6C00" />
              <Text style={styles.text}>{commentsNumber}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.post_reactions}>
              <Feather name="thumbs-up" size={24} color="#FF6C00" />
              <Text style={styles.text}>{likesNumber}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.post_location}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={[styles.text, styles.location_name]}>{location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post_wrapper: {
    marginBottom: 32,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: "#212121",
  },
  image: {
    // width: 343,
    minWidth: "100%",
    borderRadius: 8,
  },
  post_title: {
    fontWeight: "500",
    marginVertical: 8,
  },
  post_info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  post_statistics: {
    flexDirection: "row",
    gap: 24,
  },
  post_reactions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  post_location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  location_name: {
    textDecorationLine: "underline",
  },
});
