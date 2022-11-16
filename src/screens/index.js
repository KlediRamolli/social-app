import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HStack, Icon, Image, Pressable, Text } from "native-base";
import {
  AntDesign,
  Feather,
  Octicons,
  MaterialCommunityIcons,
  Foundation,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Home from "./Main/HomeScreens/Home";
import HomeNav from "./Main/HomeScreens";
import Search from "./Main/Search";
import Reels from "./Main/Reels";
import Notifications from "./Main/Notifications";
import Profile from "./Main/Profile";

const BottomTab = createBottomTabNavigator();

const MainNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { height: 65 },
        tabBarLabel: "",
        tabBarStyle: { height: 55 },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let rn = route.name;

          if (rn === "homeNav") {
            return (iconName = focused ? (
              <Foundation name="home" size={24} color="black" />
            ) : (
              <Octicons name="home" size={24} color="black" />
            ));
          } else if (rn === "Search") {
            return (iconName = focused ? (
              <Fontisto name="search" size={24} color="black" />
            ) : (
              <Octicons name="search" size={24} color="black" />
            ));
          } else if (rn === "Reels") {
            return (iconName = (
              <MaterialCommunityIcons
                name="movie-roll"
                size={24}
                color="black"
              />
            ));
          } else if (rn === "Notifications") {
            return (iconName = focused ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ));
          } else if (rn === "Profile") {
            return (iconName = (
              <AntDesign name="profile" size={24} color="black" />
            ));
          }
        },
      })}
      initialRouteName={"Home"}
    >
      <BottomTab.Screen
        name="homeNav"
        component={HomeNav}
        options={{
          headerShown: false,
        }}
        // options={{
        //   headerShown: true,
        //   headerTitle: () => (
        //     <Image
        //       width={90}
        //       height={30}
        //       source={{ uri: "https://i.imgur.com/zqpwkLQ.png" }}
        //       alt="instagram logo"
        //     />
        //   ),
        //   headerRight: () => (
        //     <HStack space={3} mr={3}>
        //       <Pressable>
        //         <AntDesign name="plus" size={24} color="black" />
        //       </Pressable>
        //       <Pressable onPress={() => navigation.navigate("Message")}>
        //         <Feather name="send" size={24} color="black" />
        //       </Pressable>
        //     </HStack>
        //   ),
        // }}
      />
      <BottomTab.Screen name={"Search"} component={Search} />
      <BottomTab.Screen name={"Reels"} component={Reels} />
      <BottomTab.Screen name={"Notifications"} component={Notifications} />
      <BottomTab.Screen name={"Profile"} component={Profile} />
    </BottomTab.Navigator>
  );
};

export default MainNav;
