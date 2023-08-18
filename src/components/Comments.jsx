import {
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
} from "react-native";
import CommentDetails from "./CommentDetails";
import userAvatar from "./../assets/img/userAvatar.png";
import userPhoto from "./../assets/img/user-photo.jpg";
// import ownerAvatar from "./../assets/img/ownerAvatar.png";
import post_2 from "./../assets/img/post_2.jpg";

const COMMENTS = [
  {
    id: "comment1",
    user_avatar: userAvatar,
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 червня, 2020",
    time: "08:40",
    author: "user1",
  },
  {
    id: "comment2",
    user_avatar: userPhoto,
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 червня, 2020",
    time: " 09:14",
    author: "owner",
  },
  {
    id: "comment3",
    user_avatar: userAvatar,
    text: "Thank you! That was very helpful!",
    date: "09 червня, 2020",
    time: " 09:20",
    author: "user1",
  },
];

export default function Comments() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <Image source={post_2} style={styles.image} />
        <View style={styles.comments_wrapper}>
          {COMMENTS.map((comment) => (
            <CommentDetails
              key={comment.id}
              user_avatar={comment.user_avatar}
              text={comment.text}
              date={comment.date}
              time={comment.time}
              author={comment.author}
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
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  comments_wrapper: {
    marginTop: 32,
  },
});
