import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";

const LocationScreen = ({ route }) => {
  const [data, setData] = useState([]);

  const { locationUrl } = route.params;

  const getData = async () => {
    await axios
      .all([await axios.get(locationUrl)])
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

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      {data === 0 ? (
        <ActivityIndicator color={"black"} />
      ) : (
        <View style={{ width: "80%" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <LocationCard item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default LocationScreen;
