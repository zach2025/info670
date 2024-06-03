import React from "react";
import { Card, Text } from "react-native-paper";

const GalleryCard = ({ name, image }) => {
  return (
    <Card>
      <Card.Cover source={image} />
      <Card.Content>
        <Text variant="headlineSmall">{name}</Text>
      </Card.Content>
    </Card>
  );
};

export default GalleryCard;
