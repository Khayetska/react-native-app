import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import InputCreatePost from "./InputCreatePost";
import Button from "./Button";

export default function CreatePosts() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.conteiner}>
        <View>
          <View style={styles.img_wrapper}>
            <TouchableOpacity>
              <View style={styles.camera_icon_wrapper}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <View>
            <InputCreatePost placeholder={"Назва..."} />
            <View style={styles.inputs_list}>
              <InputCreatePost placeholder={"Місцевість..."} isLeftPadding />
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={styles.map_icon}
              />
            </View>
          </View>
          <Button text={"Опубліковати"} disabled />
        </View>
        <View>
          <TouchableOpacity style={styles.trash_icon_wrapper}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 22,
    justifyContent: "space-between",
  },
  img_wrapper: {
    height: 240,
    width: "100%",

    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",

    justifyContent: "center",
    alignItems: "center",
  },
  camera_icon_wrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
    marginTop: 8,
  },
  map_icon: {
    position: "absolute",
    top: "30%",
  },
  inputs_list: {
    marginBottom: 32,
  },
  trash_icon_wrapper: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 23,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "center",
  },
});
