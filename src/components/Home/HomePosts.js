import { Box, HStack, Image, Text, VStack } from "native-base";
import { FlatList } from "react-native";
import {
  SimpleLineIcons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import React from "react";

import Story from "./Story";

const HomePosts = () => {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      user: "kledi",
    },
  ];

  const _renderPosts = ({ item, index }) => {
    return (
      <VStack key={index} mb={5} pt={2}>
        <HStack alignItems="center" justifyContent={"space-between"} px={3}>
          <HStack alignItems="center">
            <Image
              height={37}
              width={37}
              mr={2.5}
              alt="photo"
              rounded="full"
              source={{
                uri: item.image,
              }}
            />
            <Text>{item.user}</Text>
          </HStack>
          <SimpleLineIcons name="options-vertical" size={22} color="black" />
        </HStack>
        <Image
          height={500}
          width={"full"}
          alt="photo"
          mt={2}
          source={{
            uri: item.image,
          }}
        />
        <HStack justifyContent={"space-between"} px={3} pt={2}>
          <HStack space={4}>
            <AntDesign name="hearto" size={24} color="black" />
            <Feather name="message-circle" size={24} color="black" />
            <Feather name="send" size={24} color="black" />
          </HStack>
          <FontAwesome5 name="bookmark" size={24} color="black" />
        </HStack>
      </VStack>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => _renderPosts({ item, index })}
      showsVerticalScrollIndicator={false}
      vertical
      ListHeaderComponent={<Story />}
    />
  );
};

export default HomePosts;
