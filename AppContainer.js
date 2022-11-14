import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Home from "./src/screens/Main/Home";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup";
import { auth } from "./firebase-config";

import MainNav from "./src/screens";

const Stack = createStackNavigator();

const AppContainer = () => {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerStyle: { height: 55 } }}
        initialRouteName={"Login"}
      >
        {!isSignedIn ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <Stack.Screen
            name="Tab"
            component={MainNav}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
// <Stack.Screen
//   name="Home"
//   component={Home}
//   options={{
//     headerShown: true,
//     headerTitle: () => (
//       <Image
//         width={90}
//         height={30}
//         source={{ uri: "https://i.imgur.com/zqpwkLQ.png" }}
//         alt="instagram logo"
//       />
//     ),
//     headerRight: () => (
//       <HStack space={3} mr={3}>
//         <AntDesign name="plus" size={24} color="black" />
//         <Feather name="send" size={24} color="black" />
//       </HStack>
//     ),
//   }}
// />
