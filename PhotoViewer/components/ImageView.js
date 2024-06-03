import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";

const ImageView = ({image, name, description}) => {
  return (
    <View style={{ paddingLeft: 70, paddingTop: 30 }}>
      <Card style={{ width: "80%", height: "90%" }}>
        <Card.Cover source={image} />
        <Card.Content>
          <Text variant="headlineLarge">{name}</Text>
          <Text variant="titleLarge">{description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ImageView;
