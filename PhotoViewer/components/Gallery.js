import React from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import GalleryCard from "./GalleryCard";

const styles = StyleSheet.create({
  gallery: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    margin: 7,
  },
});

const Gallery = ({ navigation }) => {
  return (
    <ScrollView style={styles.gallery}>
        <View style={styles.card}>
          <Pressable
            onPress={() =>
              navigation.navigate("Cat Info", {
                name: "Felix",
                description:
                  "He might look mean, but he's got a big heart and loves to curl up on laps!",
                image: require("../images/image1.jpg"),
              })
            }
          >
            <GalleryCard
              name={"Felix"}
              image={require("../images/image1.jpg")}
            />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable
            onPress={() =>
              navigation.navigate("Cat Info", {
                name: "Daisy",
                description:
                  "She likes to lie down in the sunlight all day long!",
                image: require("../images/image2.jpg"),
              })
            }
          >
            <GalleryCard
              name={"Daisy"}
              image={require("../images/image2.jpg")}
            />
          </Pressable>
        </View>
      
        <View style={styles.card}>
          <Pressable
            onPress={() =>
              navigation.navigate("Cat Info", {
                name: "Mr. Sniffles",
                description: "As cute and cuddly as he looks!",
                image: require("../images/image3.jpg"),
              })
            }
          >
            <GalleryCard
              name={"Mr. Sniffles"}
              image={require("../images/image3.jpg")}
            />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable
            onPress={() =>
              navigation.navigate("Cat Info", {
                name: "Oreo",
                description:
                  "So cute she could be confused for the real thing!",
                image: require("../images/image4.jpg"),
              })
            }
          >
            <GalleryCard
              name={"Oreo"}
              image={require("../images/image4.jpg")}
            />
          </Pressable>
        </View>
    </ScrollView>
  );
};

export default Gallery;
