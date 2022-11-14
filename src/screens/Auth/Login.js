import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Image,
  Input,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../../../firebase-config";
import CustomInput from "../../components/CustomInput";
import { setUser } from "../../features/auth-slice";
import Loader from "../../components/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        user.uid && dispatch(setUser({ isSignedIn: true }));
        setLoading(false);
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
      });
  };

  return (
    <VStack
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      marginX={10}
    >
      <Box
        px={5}
        py={9}
        borderColor="coolGray.300"
        borderWidth={2}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Image
          source={{
            uri: "https://i.imgur.com/zqpwkLQ.png",
          }}
          alt="instagram logo"
          size="xs"
          width={130}
          mb={5}
        />
        <FormControl>
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            rules={{ required: "Email is required" }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be minimum 6 characters long",
              },
            }}
          />

          <Button
            rounded={0}
            py={2}
            onPress={handleSubmit(onSubmit)}
            isLoading={loading}
          >
            Log in
          </Button>
        </FormControl>
      </Box>
      <Box
        p={5}
        mt={5}
        borderColor="coolGray.300"
        borderWidth={2}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Text>
          Don't have an account?{" "}
          <Text
            style={{ color: "#5c27d7" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};

export default Login;
