import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CharacterCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      {!item ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ padding: 20 }}
          onPress={() =>
            navigation.navigate("EpisodeScreen", { episodeLinks: item.episode })
          }
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}
          >
            {item.name}
          </Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: 150, height: 150, alignSelf: "center" }}
          />
          <View style={{ padding: 20, marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Origin: </Text>
              <Text style={{ fontSize: 15 }}>{item.origin.name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Species:{" "}
              </Text>
              <Text style={{ fontSize: 15 }}>{item.species}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Status: </Text>
              <Text style={{ fontSize: 15 }}>{item.status}</Text>
            </View>
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
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Gender: </Text>
              <Text style={{ fontSize: 15 }}>{item.gender}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Location:{" "}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: "underline",
                  color: "red"
                }}
                onPress={() =>
                  navigation.navigate("LocationScreen", {
                    locationUrl: item.location.url
                  })
                }
              >
                {item.location.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "white",
    width: 350
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A"
  }
});

export default CharacterCard;
