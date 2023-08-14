import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const EntryForm = ({ register = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const {
    form_wrapper,
    form_wrapper_accent,
    title,
    inputs_wrapper,
    input,
    password_toggle,
    text,
    link,
    link_accent,
    button,
    button_text,
    text_link,
    user_img_wrapper,
    user_img,
    icon_wrapper,
  } = styles;

  const styleName = register
    ? form_wrapper
    : [form_wrapper, form_wrapper_accent];

  return (
    <View style={styleName}>
      {register && (
        <View style={user_img_wrapper}>
          <Image style={user_img} />
          <View style={icon_wrapper}>
            <EvilIcons name="plus" size={36} color="#FF6C00" />
          </View>
        </View>
      )}
      <Text style={title}>{register ? "Реєстрація" : "Увійти"} </Text>
      <View style={inputs_wrapper}>
        {register && <TextInput style={input} placeholder="Логін" />}
        <TextInput style={input} placeholder="Адреса електронної пошти" />
        <View>
          <TextInput
            style={input}
            placeholder="Пароль"
            secureTextEntry={!isVisible}
          />
          <Text style={[text, password_toggle]} onPress={onPress}>
            {!isVisible ? "Показати" : "Заховати"}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={button}>
        <Text style={button_text}>
          {register ? "Зареєстуватися" : "Увійти"}
        </Text>
      </TouchableOpacity>
      {register ? (
        <Text style={[text, text_link]}>
          Вже є акаунт? <Text style={link}>Увійти</Text>
        </Text>
      ) : (
        <Text style={[text, text_link]}>
          Немає акаунту?{" "}
          <Text style={[link, link_accent]}>Зареєструватися</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  form_wrapper: {
    backgroundColor: "#fff",

    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
    width: "100%",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 92,
    paddingBottom: 66,
    paddingLeft: 16,
    paddingRight: 16,
  },
  form_wrapper_accent: {
    paddingTop: 32,
    paddingBottom: 132,
  },
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
  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
  },
  inputs_wrapper: {
    width: 343,
    marginTop: 33,
    gap: 16,
    marginBottom: 43,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,

    fontWeight: "400",
    fontSize: 16,
    color: "#BDBDBD",
  },
  password_toggle: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1B4371",
  },
  text_link: {
    marginTop: 16,
  },
  link_accent: {
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    borderRadius: 100,

    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
});

export default EntryForm;
