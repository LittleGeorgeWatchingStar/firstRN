import React, {useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { HStack, Text, Image, Center, Box, View } from "native-base";
import styled from 'styled-components/native';
import { TouchableOpacity, ScrollView } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import A8 from "../../assets/AudiA8.jpg";
import CTS from "../../assets/CTS.jpg";
import Camaro from "../../assets/ChevroletCamaro.jpg";
import BMW_M2 from "../../assets/BMW_M2.jpg";
// import { Searchbar } from 'react-native-paper';
// import SearchBar from "../components/SearchBar";
import { SearchBar } from 'react-native-elements';
const listings = [
  {
    id: 1,
    title: "White BMW M2",
    price: 1000,
    image: BMW_M2,
  },
  {
    id: 2,
    title: "Red Camaro",
    price: 700,
    image: Camaro,
  },
  {
    id: 3,
    title: "White Cadillac CTS",
    price: 800,
    image: CTS,
  },
  {
    id: 4,
    title: "Black Audi A8",
    price: 1500,
    image: A8,
  },
];

function ListingsScreen(props) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  return (
    <Screen style={styles.screen}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
        

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price + "/day"}
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
