import React from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import LogOutButton from "./LogOutButton";
import PostDetails from "./PostDetails";
import UserPhoto from "./UserPhoto";
import post_1 from "./../assets/img/post_1.jpg";
import post_2 from "./../assets/img/post_2.jpg";
import post_3 from "./../assets/img/post_3.jpg";

const POSTS = [
  {
    id: "post1",
    image: post_1,
    title: "Старий будиночок у Венеції",
    commentsNumber: "50",
    likesNumber: "200",
    location: "Italy",
  },
  {
    id: "post2",
    image: post_2,
    title: "Захід на Чорному морі",
    commentsNumber: "3",
    likesNumber: "200",
    location: "Ukraine",
  },
  {
    id: "post3",
    image: post_3,
    title: "Ліс",
    commentsNumber: "8",
    likesNumber: "153",
    location: "Ukraine",
  },
];

export default function Profile() {
  return (
    <SafeAreaView style={styles.profile_wrapper}>
      <UserPhoto />
      <View style={styles.logout_wrapper}>
        <LogOutButton />
      </View>
      <ScrollView contentContainerStyle={styles.profile_view}>
        <Text style={styles.profile_name}>Natali Romanova</Text>
        {POSTS.map((post) => (
          <PostDetails
            key={post.id}
            image={post.image}
            title={post.title}
            commentsNumber={post.commentsNumber}
            likesNumber={post.likesNumber}
            location={post.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profile_wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    marginTop: 120,
    paddingTop: 92,
    alignItems: "center",
  },
  profile_view: {
    paddingBottom: 43,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  profile_name: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 13,
  },
  logout_wrapper: {
    position: "absolute",
    top: 22,
    right: 0,
  },

  post_list: {
    alignItems: "center",
    width: "100%",
  },
});
