import React, { useState } from "react";
import { TextInput, View, StyleSheet, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

import color from "../constants/color";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function CustomInput(props) {
  const {
    placeholder,
    keyboardType,
    onChangeText,
    isPassword,
    style,
    labelFor,
    error,
    value,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, SetIsFocused] = useState(false);

  const ErrorLog = () => {
    return (
      <Text style={styles.error}>
        {Array.isArray(error[labelFor]) ? error[labelFor][0] : null}
      </Text>
    );
  };

  return (
    <View style={{ alignSelf: "center", width: "90%", ...style }}>
      <View style={[styles.inputContainer]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={(text) => {
            onChangeText(text);
            SetIsFocused(true);
          }}
          placeholderTextColor={color.primaryTextColor}
          secureTextEntry={!isVisible && isPassword}
          value={value}
        />
        {isPassword ? (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => setIsVisible((prevState) => !prevState)}
            >
              <Icon
                name={isVisible ? "eye" : "eye-with-line"}
                color={color.darkBlue}
                size={21}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      {isPassword && props.forgotPassword && (
        <TouchableOpacity>
          <Text style={styles.fogotPasswordtxt}>Forgot Password?</Text>
        </TouchableOpacity>
      )}
      {error && isFocused ? (
        ErrorLog()
      ) : !isPassword || isFocused ? (
        <Text style={{ fontSize: 10 }}></Text>
      ) : null}
      {isPassword && !isFocused ? (
        <>
          <Text style={styles.requiermentText}>
            Password length should be more than 8 characters
          </Text>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    backgroundColor: color.secondaryBackgroundColor,
    width: 310,
    borderRadius: 5,
    // padding: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  input: {
    height: 48,
    width: 290,
    // paddingLeft: 15,
    fontFamily: "Jost-Light",
    lineHeight: 20,
    fontSize: 14,
    color: color.primaryTextColor,
    flexWrap: "wrap",
    overflow: "hidden",
    // backgroundColor: "red",
    // marginLeft: 10,
  },
  error: {
    color: "red",
    fontSize: 10,
    padding: 0,
    marginLeft: 10,
  },
  fogotPasswordtxt: {
    color: "#19ABFE",
    fontSize: 13,
    lineHeight: 15,
    left: 11,
    marginTop: 2,
    marginBottom: 4,
    fontFamily: "Jost-semiBold",
  },
  requiermentText: {
    fontSize: 11,
    marginLeft: 10,
    fontFamily: "Jost-Light",
    color: color.primaryTextColor,
  },
});
