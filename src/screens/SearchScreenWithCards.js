import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Screen from "../components/Screen";
import Card from "../components/Card";
import A8 from "../../assets/AudiA8.jpg";
import CTS from "../../assets/CTS.jpg";
import Camaro from "../../assets/ChevroletCamaro.jpg";
import BMW_M2 from "../../assets/BMW_M2.jpg";
import SubaruWRX from "../../assets/subaruwrx.jpg";
import SubaruBRZ from "../../assets/SubaruBRZ.jpg";
import SubaruOutback from "../../assets/subaruoutback.jpg";
import Porsche from "../../assets/porsche911.jpg";
import HondaCivic from "../../assets/hondacivic.jpg";
const listings = [
  {
    id: 1,
    title: "2022 White BMW M2",
    price: 1000,
    image: BMW_M2,
  },
  {
    id: 2,
    title: "2020 Red Camaro",
    price: 700,
    image: Camaro,
  },
  {
    id: 3,
    title: "2021 White Cadillac CTS",
    price: 800,
    image: CTS,
  },
  {
    id: 4,
    title: "2019 Black Audi A8",
    price: 1500,
    image: A8,
  },
  {
    id: 5,
    title: "2021 Blue Subaru WRX",
    price: 1200,
    image: SubaruWRX,
  },
  {
    id: 6,
    title: "2017 Yellow Subaru BRZ",
    price: 900,
    image: SubaruBRZ,
  },
  {
    id: 7,
    title: "2017 Green Subaru Outback",
    price: 1100,
    image: SubaruOutback,
  },
  {
    id: 8,
    title: "2018 Red Porsche 911",
    price: 2100,
    image: Porsche,
  },
  {
    id: 9,
    title: "2020 Red Honda Civic",
    price: 900,
    image: HondaCivic,
  },
];


const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
      setFilteredDataSource(listings);
      setMasterDataSource(listings);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <Screen style={styles.screen}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(listing) => listing.title}
          ItemSeparatorComponent={ItemSeparatorView}
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
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 10,
  },
  screen: {
    padding: 20,
    backgroundColor: '#fff111',
  },
});

export default App;
