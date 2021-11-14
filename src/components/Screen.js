import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style,]}>
      <View style={[style, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // whenever we use a screen component, the component takes the entire screen
    flex: 1,
  },
  view: {
    flex: 1
  }
});

export default Screen;
