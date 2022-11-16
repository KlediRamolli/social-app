import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  AntDesign,
  Feather,
  Octicons,
  MaterialCommunityIcons,
  Foundation,
  Fontisto,
} from "@expo/vector-icons";
import { HStack, Icon, Image, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

import Home from "./Home";
import Message from "./Message";

const HomeStack = createStackNavigator();

const HomeNav = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
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
              <Pressable>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Message")}>
                <Feather name="send" size={24} color="black" />
              </Pressable>
            </HStack>
          ),
        }}
      />
      <HomeStack.Screen name="Message" component={Message} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
