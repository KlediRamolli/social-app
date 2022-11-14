import { Box, NativeBaseProvider, Text } from "native-base";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import theme from "./src/theme";
import { store } from "./store";
import { auth } from "./firebase-config";
import AppContainer from "./AppContainer";

console.log(auth);
export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </NativeBaseProvider>
  );
}
