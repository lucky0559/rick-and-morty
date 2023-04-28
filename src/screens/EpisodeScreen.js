import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard";

const EpisodeScreen = ({ route }) => {
  const [data, setData] = useState([]);

  const { episodeLinks } = route.params;

  const getData = async () => {
    await axios
      .all([await axios.get(episodeLinks[0])])
      .then(
        axios.spread(data1 => {
          setData([data1.data]);
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
        paddingTop: 50
      }}
    >
      {!data && isLoading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <View style={{ width: "80%" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <EpisodeCard item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default EpisodeScreen;
