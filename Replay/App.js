import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddReplay from "./components/AddReplay";
import MyReplays from "./components/MyReplays";
import Review from "./components/Review";
import Replay from "./components/Replay";

const Stack = createNativeStackNavigator();

const ReviewParam = ({ route, navigation }) => {
  return(
    <Review
      track={route.params.track}
      artist={route.params.artist}
      link={route.params.link}
      image={route.params.image}
      square={route.params.square}
      navigation={navigation}
    />
  )
}

const ReplayParam = ({ route }) => {
  return(
    <Replay
      track={route.params.track}
      artist={route.params.artist}
      review={route.params.review}
      link={route.params.link}
      image={route.params.image}
    />
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="My Replays"
            component={MyReplays} />
          <Stack.Screen name="Song Replay"
            component={ReplayParam} />
          <Stack.Screen name="Add Replay"
            component={AddReplay} />
          <Stack.Screen name="Song Review"
            component={ReviewParam} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
