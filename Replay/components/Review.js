import React, { useState } from "react";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, Alert, Image } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { ImageBackground } from "react-native";

const styles = StyleSheet.create({
  song: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex'
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textOverflow: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: 'center',
  },
});

const Review = ({ track, artist, link, image, square, navigation }) => {
  const [rating, setRating] = useState(0.0);

  const submitReview = async () => {
    try {
      fetch(
        `https://www.cs.drexel.edu/~zt86/addReplay.php?track=${track}&artist=${artist}&review=${rating}&link=${link}&image=${image}`
      )
      .then((response) => response.text())
      .then((data) => {
        if (data === "1") {
          Alert.alert("Success", "Review was saved!", [
            { text: "Close" },
          ]);
          navigation.navigate("My Replays")
        } else {
          Alert.alert("Error", "Failed to save review", [
            { text: "Close" },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (e) {}
  };

  return (
    <ImageBackground
      source={{
        uri: "https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg",
      }}
      resizeMode='cover'
      blurRadius={7}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.song}>
        <Image
          source={image}
          width={square}
          height={square}
          style={{
            aspectRatio: 1,
            resizeMode: "contain",
            flex: 1,
            borderRadius: 10
          }}
        />
        <div style={styles.center}>
          <Text variant="headlineSmall" style={styles.textOverflow}>
            {track}
          </Text>
          <Text variant="titleMedium" style={styles.textOverflow}>
            {artist}
          </Text>
          <StarRating color='white' rating={rating} onChange={(value) => setRating(value)} />
          <Button
            mode='elevated'
            buttonColor="rgb(200, 88, 249)"
            textColor="white"
            elevation={2}
            onPress={() => submitReview()}
            style={{ alignSelf: "center", marginTop: 10 }}
          >
            Save
          </Button>
        </div>
      </View>
    </ImageBackground>
  );
};

export default Review;
