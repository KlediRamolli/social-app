import React, { useState } from "react";
import {
  Button,
  Text,
  VStack,
  Box,
  Image,
  FormControl,
  Input,
} from "native-base";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { auth, db } from "../../../firebase-config";
import CustomInput from "../../components/CustomInput";
import { setUser } from "../../features/auth-slice";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password, username }) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.uid && dispatch(setUser({ isSignedIn: true }));
        setDoc(doc(db, "users", user.uid), {
          firstName: "",
          lastName: "",
          userName: username,
          id: user.uid,
          email: user.email,
          profileImg: "",
        });
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
            name="username"
            placeholder="Username"
            control={control}
            rules={{ required: "Username is required" }}
          />
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
            Sign up
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
          Already have an account?{" "}
          <Text
            style={{ color: "#5c27d7" }}
            onPress={() => navigation.goBack()}
          >
            Login
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};

export default Signup;
