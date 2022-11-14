import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HStack, Icon, Image, Text } from "native-base";
import {
  AntDesign,
  Feather,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Home from "./Main/Home";
import Search from "./Main/Search";
import Reels from "./Main/Reels";
import Notifications from "./Main/Notifications";
import Profile from "./Main/Profile";

const BottomTab = createBottomTabNavigator();

const MainNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: true, headerStyle: { height: 65 } }}
      initialRouteName={"Home"}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              width={90}
              height={30}
              source={{ uri: "https://i.imgur.com/zqpwkLQ.png" }}
              alt="instagram logo"
            />
          ),
          headerRight: () => (
            <HStack space={3} mr={3}>
              <AntDesign name="plus" size={24} color="black" />
              <Feather name="send" size={24} color="black" />
            </HStack>
          ),
          tabBarIcon: () => <Octicons name="home" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name={"Search"}
        component={Search}
        options={{
          tabBarIcon: () => <Octicons name="search" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name={"Reels"}
        component={Reels}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name={"Notifications"}
        component={Notifications}
        options={{
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarIcon: () => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNav;
