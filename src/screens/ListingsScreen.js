import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import jacket from "../../assets/jacket.jpg";
import couch from "../../assets/couch.jpg"
import routes from "../navigation/routes";
import Screen from "../components/Screen";


import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

function ListingsScreen({navigation}) {
  // const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   loadListings;
  // }, []);

  // const loadListings = async () => {
  //   const response = await listingsApi.getListings();
  //   console.log(response);
  //   setListings(response.data);
  // }

  // console.log(listings);
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  console.log(getListingsApi.data);
  console.log(getListingsApi.error);

  return (
    // <Screen style={styles.screen}>
    //   <FlatList
    //     data={getListingsApi.data}
    //     keyExtractor={(listing) => listing.id.toString()}
    //     renderItem={({ item }) => (
    //       <Card
    //         title={item.title}
    //         subTitle={"$" + item.price}
    //         imageUrl={item.images[0].url}
    //         onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
    //       />
    //     )}
    //   />
    // </Screen>
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
