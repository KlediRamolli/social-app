import { Box, ScrollView, Text, VStack, Image } from "native-base";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Story = () => {
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

  return (
    <Box>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        borderBottomColor={"gray.300"}
        borderBottomWidth={1}
        pb={3}
        pt={2}
        zIndex={-1}
      >
        <VStack alignItems={"center"} ml={3.5} width={60}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
            height={57}
            width={57}
            alt="photo"
            rounded="full"
          />
          <Box left={5} top={-20} backgroundColor="white" rounded={"full"}>
            <FontAwesome5 name="plus-circle" size={18} color="blue" />
          </Box>

          <Text isTruncated fontSize={11} mt={-5} style={{ width: "auto" }}>
            Your Story
          </Text>
        </VStack>
        {data.map((i, index) => (
          <VStack alignItems={"center"} ml={3.5} key={index} width={60}>
            <Image
              source={{
                uri: i.image,
              }}
              height={57}
              width={57}
              alt="photo"
              rounded="full"
            />
            <Text
              isTruncated
              fontSize={11}
              style={{ width: "auto", backgroundColor: "red.300" }}
            >
              {i.user}
            </Text>
          </VStack>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Story;
