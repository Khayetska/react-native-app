import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import PostDetails from "./PostDetails.jsx";
import userPhoto from "./../assets/img/user-photo.jpg";
import post_1 from "./../assets/img/post_1.jpg";
import post_2 from "./../assets/img/post_2.jpg";
import post_3 from "./../assets/img/post_3.jpg";

const user = {
  photo: userPhoto,
  name: "Natali Romanova",
  email: "email@example.com",
};

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

export default function Posts() {
  const [posts, setPosts] = useState(POSTS);

  return (
    <SafeAreaView style={styles.conteiner}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <View style={styles.user_wrapper}>
          <Image source={user.photo} style={styles.user_image} />
          <View style={styles.user_info}>
            <Text style={styles.user_name}>{user.name}</Text>
            <Text style={styles.user_email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.post_list}>
          {posts.map((post) => (
            <PostDetails
              image={post.image}
              title={post.title}
              commentsNumber={post.commentsNumber}
              likesNumber={post.likesNumber}
              location={post.location}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
  },
  user_wrapper: {
    marginTop: 50, // 32
    flexDirection: "row",
    aligAtems: "center",
    gap: 8,
    marginBottom: 23,
  },
  user_image: {
    width: 60,
    height: 60,
  },
  user_info: {
    justifyContent: "center",
  },
  user_name: {
    fontWeight: "700",
  },
  user_email: {
    top: -4,
  },
  post_list: {
    alignItems: "center",
    width: "100%",
  },
});
