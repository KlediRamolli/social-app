import { ActivityIndicator } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";

const Loader = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <Text>Loading</Text>
      <ActivityIndicator />
    </Box>
  );
};

export default Loader;
