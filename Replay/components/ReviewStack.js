import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "./Gallery";
import ImageView from "./ImageView";

const Stack = createNativeStackNavigator();

const Image = ({ route }) => {
  return (
    <ImageView
      image={route.params.image}
      name={route.params.name}
      description={route.params.description}
      square={route.params.square}
    />
  );
};

function GalleryStack() {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen name="Adopt A Cat" component={Gallery} />
      <Stack.Screen name="Cat Info" component={Image} />
    </Stack.Navigator>
  );
}

export default GalleryStack;
