import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { colors } from "../constants/colors";

export default function PageLayout(props) {
  const { children, styles, headerDisabled, headerTitle } = props;

  return (
    <View style={[styles.contianer, styles]}>
      {!headerDisabled && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {headerTitle ? headerTitle : "AnimeGod"}
          </Text>
        </View>
      )}
      <Children />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
