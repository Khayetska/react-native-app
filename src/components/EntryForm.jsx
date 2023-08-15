import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Input from "./Input";

const EntryForm = ({ register = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = () => {
    if (register) console.log(login);
    console.log(email);
    console.log(password);
    if (register) setLogin("");
    setEmail("");
    setPassword("");
  };

  const formWrapperStyleName = register
    ? styles.form_wrapper
    : [styles.form_wrapper, styles.form_wrapper_accent];

  return (
    <SafeAreaView style={formWrapperStyleName}>
      {register && (
        <View style={styles.user_img_wrapper}>
          <Image style={styles.user_img} />
          <View style={styles.icon_wrapper}>
            <EvilIcons name="plus" size={36} color="#FF6C00" />
          </View>
        </View>
      )}
      <Text style={styles.title}>{register ? "Реєстрація" : "Увійти"} </Text>
      <View style={styles.inputs_wrapper}>
        {register && (
          <Input value={login} onChangeText={setLogin} placeholder={"Логін"} />
        )}
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder={"Адреса електронної пошти"}
        />
        <View>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder={"Пароль"}
            secureTextEntry={!isVisible}
            autoCapitalize={"none"}
          />
          <Text style={[styles.text, styles.password_toggle]} onPress={onPress}>
            {!isVisible ? "Показати" : "Заховати"}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit}
        underlayColor={"#fc8642"}
      >
        <Text style={styles.button_text}>
          {register ? "Зареєстуватися" : "Увійти"}
        </Text>
      </TouchableHighlight>
      {register ? (
        <Text style={[styles.text, styles.text_link]}>
          Вже є акаунт?
          <Text style={styles.link}>Увійти</Text>
        </Text>
      ) : (
        <Text style={[styles.text, styles.text_link]}>
          Немає акаунту?{" "}
          <Text style={[styles.link, styles.link_accent]}>Зареєструватися</Text>
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form_wrapper: {
    backgroundColor: "#fff",
    position: "relative",
    alignItems: "center",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 92,
    paddingBottom: 66,
    paddingHorizontal: 16,
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
    width: "100%",
    gap: 16,
    marginTop: 33,
    marginBottom: 43,
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

    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
});

export default EntryForm;
