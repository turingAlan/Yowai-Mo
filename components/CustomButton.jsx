import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import color from "../constants/color";

export default CustomButton = (props) => {
  const { title, style, onPress, disabled, backgroundColor } = props;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={{
          ...styles.buttonView,
          backgroundColor: disabled
            ? color.buttonDisabledColor
            : backgroundColor,
          borderRadius: 5,
        }}
        onPress={!disabled ? onPress : null}
      >
        <Text style={styles.ButtonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  buttonView: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    backgroundColor: "black",
    elevation: 2,
  },
  ButtonTitle: {
    color: color.white,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Jost-Medium",
  },
});
