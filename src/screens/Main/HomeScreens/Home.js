import React from "react";
import { Box, Button, ScrollView, Text, VStack } from "native-base";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../../../../firebase-config";
import { setUser } from "../../../features/auth-slice";
import Story from "../../../components/Home/Story";
import HomePosts from "../../../components/Home/HomePosts";

const Home = ({ navigation }) => {
  return (
    <Box backgroundColor="white">
      <HomePosts />
    </Box>
  );
};

export default Home;
{
  /* <Button onPress={onLogOut}>Log out</Button> */
}
// const onLogOut = () => {
//   signOut(auth).then(() => {
//     dispatch(setUser({ isSignedIn: false }));
//     navigation.navigate("Login");
//   });
// };
