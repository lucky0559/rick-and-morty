import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import EpisodeScreen from "./src/screens/EpisodeScreen";
import LocationScreen from "./src/screens/LocationScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
