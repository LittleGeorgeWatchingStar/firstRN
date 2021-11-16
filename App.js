import React, { useEffect, useState } from "react";
import { Text, View, Button, Image } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import { NativeBaseProvider } from "native-base";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/Screen";
import AppPicker from "./src/components/Picker";
import AppTextInput from "./src/components/TextInput";
import LoginScreen from "./src/screens/LoginScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Loaction } from "expo-location";
import ImageInput from "./src/components/ImageInput";
import ImageInputList from "./src/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigator from "./src/navigation/AppNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AuthNavigator from "./src/navigation/AuthNavigator";
import OfflineNotice from "./src/components/OfflineNotice";

export default function App() {
  return (
    <NativeBaseProvider>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>

        <AppNavigator />
        {/* <AuthNavigator /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
