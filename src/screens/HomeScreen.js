import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator, FlatList, View } from "react-native";
import CharacterCard from "../components/CharacterCard";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .all([
        await axios.get("https://rickandmortyapi.com/api/character/229"),
        await axios.get("https://rickandmortyapi.com/api/character/468"),
        await axios.get("https://rickandmortyapi.com/api/character/575"),
        await axios.get("https://rickandmortyapi.com/api/character/667")
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setData([data1.data, data2.data, data3.data, data4.data]);
        })
      )
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30
      }}
    >
      {!data && isLoading ? (
        <View>
          <ActivityIndicator color={"white"} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <CharacterCard item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        />
      )}
    </View>
  );
};

export default HomeScreen;
