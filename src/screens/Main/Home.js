import React from "react";
import { Box, Button, Text } from "native-base";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../../../firebase-config";
import { setUser } from "../../features/auth-slice";
import Story from "../../components/Home/Story";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser({ isSignedIn: false }));
      navigation.navigate("Login");
    });
  };
  return (
    <Box>
      <Story />
    </Box>
  );
};

export default Home;
{
  /* <Button onPress={onLogOut}>Log out</Button> */
}
