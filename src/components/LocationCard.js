import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CharacterCard from "./CharacterCard";

const LocationCard = ({ item }) => {
  const [characters, setCharacters] = useState([]);

  const charactersLink = item.residents;

  const getData = async () => {
    await axios
      .all([
        await axios.get(charactersLink[0]),
        await axios.get(charactersLink[1]),
        await axios.get(charactersLink[2]),
        await axios.get(charactersLink[3]),
        await axios.get(charactersLink[4]),
        await axios.get(charactersLink[5]),
        await axios.get(charactersLink[6]),
        await axios.get(charactersLink[7]),
        await axios.get(charactersLink[8]),
        await axios.get(charactersLink[9]),
        await axios.get(charactersLink[10]),
        await axios.get(charactersLink[11]),
        await axios.get(charactersLink[12]),
        await axios.get(charactersLink[13]),
        await axios.get(charactersLink[14]),
        await axios.get(charactersLink[15]),
        await axios.get(charactersLink[16]),
        await axios.get(charactersLink[17])
      ])
      .then(
        axios.spread(
          (
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13,
            data14,
            data15,
            data16,
            data17,
            data18
          ) => {
            setCharacters([
              data1.data,
              data2.data,
              data3.data,
              data4.data,
              data5.data,
              data6.data,
              data7.data,
              data8.data,
              data9.data,
              data10.data,
              data11.data,
              data12.data,
              data13.data,
              data14.data,
              data15.data,
              data16.data,
              data17.data,
              data18.data
            ]);
          }
        )
      )
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={[styles.container]}>
      {!item ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}
          >
            {item.name}
          </Text>
          <View style={{ padding: 20, marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Type: </Text>
              <Text style={{ fontSize: 15 }}>{item.type}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Dimension:{" "}
              </Text>
              <Text style={{ fontSize: 15 }}>{item.dimension}</Text>
            </View>
            <Text>{characters.name}</Text>
          </View>
          <Text
            style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
          >
            Residents:
          </Text>
          {characters.length === 0 ? (
            <ActivityIndicator color={"black"} style={{ margin: 20 }} />
          ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FlatList
                data={characters}
                renderItem={({ item }) => <CharacterCard item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "white"
  }
});

export default LocationCard;
