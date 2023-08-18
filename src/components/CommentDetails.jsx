import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CommentDetails({
  user_avatar,
  text,
  date,
  time,
  author,
}) {
  const authorCheck = author === "owner";

  const commentWrapperStyleName = authorCheck
    ? [styles.comment_wrapper, styles.comment_wrapper_owner]
    : styles.comment_wrapper;

  const dateStyleName = authorCheck
    ? [styles.date, styles.date_owner]
    : styles.date;

  return (
    <View style={commentWrapperStyleName}>
      <View style={styles.avatar_wrapper}>
        <Image source={user_avatar} style={styles.avatar} />
      </View>
      <View style={styles.content_wrapper}>
        <Text style={styles.text}>{text}</Text>
        <Text style={dateStyleName}>
          {date} | {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  comment_wrapper: {
    flexDirection: "row",
    gap: 16,
    alignItems: "flex-start",
  },
  comment_wrapper_owner: {
    flexDirection: "row-reverse",
  },
  content_wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 10,
    padding: 16,
    gap: 8,
    width: "85%",
  },
  // avatar_wrapper: {
  //   width: 28,
  //   height: 28,
  // },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  text: {
    fontSize: 13,
    color: "#212121",
  },
  date: {
    color: "#BDBDBD",
    alignSelf: "flex-end",
    fontSize: 10,
  },
  date_owner: {
    alignSelf: "flex-start",
  },
});
