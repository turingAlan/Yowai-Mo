import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import { useState } from "react";
import MotionBackground from "./screens/MotionBackground";
import TabNavigator from "./navigators/TabNavigator";

export default function App() {
  const [ImageLoaded, setImageLoaded] = useState(false);

  setTimeout(() => {
    setImageLoaded(true);
  }, 2200);
  const [fontsLoaded] = useFonts({
    900: require("./assets/fonts/Noto-Sans/NotoSans-Black.ttf"),
    800: require("./assets/fonts/Noto-Sans/NotoSans-ExtraBold.ttf"),
    700: require("./assets/fonts/Noto-Sans/NotoSans-Bold.ttf"),
    600: require("./assets/fonts/Noto-Sans/NotoSans-SemiBold.ttf"),
    500: require("./assets/fonts/Noto-Sans/NotoSans-Medium.ttf"),
    400: require("./assets/fonts/Noto-Sans/NotoSans-Regular.ttf"),
    300: require("./assets/fonts/Noto-Sans/NotoSans-Light.ttf"),
    200: require("./assets/fonts/Noto-Sans/NotoSans-ExtraLight.ttf"),
    100: require("./assets/fonts/Noto-Sans/NotoSans-Thin.ttf"),
  });

  if (!fontsLoaded || !ImageLoaded) {
    return <Splash />;
  }

  return <TabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
