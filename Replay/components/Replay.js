import React from "react";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, Linking, Image } from "react-native";
import { ImageBackground } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

const styles = StyleSheet.create({
  song: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textOverflow: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
  },
});

const Replay = ({ track, artist, review, link, image }) => {
  console.log(review);
  return (
    <ImageBackground
      source={{
        uri: "https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg",
      }}
      resizeMode="cover"
      blurRadius={7}
      style={{ width: "100%", height: "100%" }}
    >
      {console.log(review)}
      <View style={styles.song}>
        <Image
          source={image}
          width={370}
          height={370}
          style={{
            aspectRatio: 1,
            resizeMode: "contain",
            flex: 1,
            borderRadius: 10,
          }}
        />
        <div style={styles.center}>
          <Text variant="headlineSmall" style={styles.textOverflow}>
            {track}
          </Text>
          <Text variant="titleMedium" style={styles.textOverflow}>
            {artist}
          </Text>
          <StarRatingDisplay color="white" rating={review} />
          <Button
            mode="elevated"
            icon="spotify"
            buttonColor="rgb(29, 185, 84)"
            textColor="white"
            elevation={2}
            onPress={() => Linking.openURL(link)}
            style={{ alignSelf: "center", marginTop: 10 }}
          >
            Open In Spotify
          </Button>
        </div>
      </View>
    </ImageBackground>
  );
};

export default Replay;
