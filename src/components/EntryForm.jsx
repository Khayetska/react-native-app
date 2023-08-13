import { StyleSheet, Text, View, TextInput } from "react-native";

const EntryForm = ({ register = false }) => {
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
    button_text,
    text_link,
  } = styles;

  const styleName = register
    ? form_wrapper
    : [form_wrapper, form_wrapper_accent];

  return (
    <View style={styleName}>
      <Text style={title}>{register ? "Реєстрація" : "Увійти"} </Text>
      <View style={inputs_wrapper}>
        {register && <TextInput style={input} placeholder="Логін" />}
        <TextInput style={input} placeholder="Адреса електронної пошти" />
        <View>
          <TextInput style={input} placeholder="Пароль" />
          <Text style={[text, password_toggle]}>Показати</Text>
        </View>
      </View>
      {/* Обгорнути чимось і назвати button */}
      <Text style={button_text}>{register ? "Зареєстуватися" : "Увійти"}</Text>

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
    alignItems: "center",

    backgroundColor: "#fff",
    position: "relative",

    borderColor: "black",
    borderWidth: 2,
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
  button_text: {
    backgroundColor: "#FF6C00",
    width: "100%",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,

    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
});

export default EntryForm;
