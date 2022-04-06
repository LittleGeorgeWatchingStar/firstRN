import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/Text";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/AudiA8.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Audi A8 for rent</AppText>
        <AppText style={styles.price}>$1500</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/steven.jpg")}
            title="Steven Zhang"
            subTitle="3 items"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
