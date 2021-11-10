import React, { useState }  from "react";
import { View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import { NativeBaseProvider } from 'native-base';
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/Screen";
import AppPicker from "./src/components/AppPicker";
import AppTextInput from "./src/components/AppTextInput";
import LoginScreen from "./src/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <NativeBaseProvider>
      {/* <ListingDetailsScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <AccountScreen /> */}
      {/* <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Category"
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen> */}
      <WelcomeScreen />
      {/* <LoginScreen /> */}
    </NativeBaseProvider>
  );
}
