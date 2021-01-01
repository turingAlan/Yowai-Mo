import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

export default function MotionBackground({ children }) {
  const IMAGE_OFFSET = 80;
  const HALF_PI = Math.PI / 2;
  const PI = Math.PI;
  const { height, width } = Dimensions.get("window");

  const senosorValue = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  });

  const imageStyle = useAnimatedStyle(() => {
    const { yaw, roll, pitch } = senosorValue.sensor.value; // yaw, roll, pitch are for different axis of rotation yaw for z axis, roll for x axis and pitch for y axis

    return {
      top: interpolate(pitch, [-HALF_PI, HALF_PI], [-IMAGE_OFFSET, 0], {
        // we use interpolate to map the value of pitch from -PI/2 to PI/2 to -IMAGE_OFFSET to 0 giving the mapped top value

        interval: 200, // interval is the time in ms after which the value is updated that it doesn't glitch out on the edges
      }),
      left: interpolate(roll, [-PI, PI], [-IMAGE_OFFSET, 0], { interval: 200 }), // these value of roll and pitch are in radians and hence varies form -PI/2 to PI/2 or PI to PI
    };
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/mainBackground.jpg")}
        style={[
          {
            height: height + 2 * IMAGE_OFFSET,
            width: width + 2 * IMAGE_OFFSET,
            position: "absolute",
          },
          imageStyle,
        ]}
        blurRadius={5}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
