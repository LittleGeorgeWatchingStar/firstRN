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

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button title="View tweet" onPress={() => navigation.navigate("TweetDetails")}></Button>
//   </Screen>
// );

// const TweetDetails = () => (
//   <Screen>
//     <Text>Tweet Details Hello</Text>
//   </Screen>
// );

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen><Text>Account</Text></Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={Tweets} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer>
        <StackNavigator />
    
      </NavigationContainer> */}
      <NavigationContainer theme={navigationTheme}>

      <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
