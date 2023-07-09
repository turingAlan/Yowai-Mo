import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

export default function Splash() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
      // resizeMode="cover"
      blurRadius={4}
    >
      <View style={styles.gifContainer}>
        <Image
          source={require("../assets/splash.gif")}
          style={{
            width: 250,
            height: 250,
          }}
        />
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 250, width: 250, bottom: 30 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    // width: "100%",
  },
  gifContainer: {
    alignSelf: "center",
    top: 100,
  },
});
