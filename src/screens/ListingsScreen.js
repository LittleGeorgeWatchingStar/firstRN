import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import jacket from "../../assets/jacket.jpg";
import couch from "../../assets/couch.jpg"
const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: jacket,
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: couch,
  },
  {
    id: 3,
    title: "Couch 2",
    price: 800,
    image: couch,
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
