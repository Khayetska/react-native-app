import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import LogOutButton from "./../components/LogOutButton";
import BackButton from "../components/BackButton";

const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
  const iconColor = (focused) => (focused ? "#fff" : "#212121");

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        headerStyle: styles.headerStyle,
        headerTintColor: "#212121",
        headerTitleAlign: "center",
        headerTitleStyle: styles.headerTitleStyle,
        headerLeft: () => null,
        headerRight: () => <LogOutButton />,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name == "Posts") iconName = "grid";
          if (route.name == "CreatePosts") iconName = "plus";
          if (route.name == "Profile") iconName = "user";

          return (
            <Feather name={iconName} size={24} color={iconColor(focused)} />
          );
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => <BackButton />,
          headerRight: () => null,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0, 0, 0, 0.30)",
    borderBottomWidth: 0.5,
  },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
  },
  tabBarStyle: {
    height: 71,
    paddingTop: 10,
    paddingHorizontal: 82,
    borderTopWidth: 0.5,
    borderTopColor: "#BDBDBD",
  },
  tabBarItemStyle: {
    borderRadius: 20,
    height: 40,
  },
});
