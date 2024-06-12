import React, { useEffect, useState } from "react";
import { Card, Text, FAB, Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

const styles = StyleSheet.create({
  log: {
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    width: 360,
    height: 360,
    padding: 10,
    paddingLeft: 20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textOverflow: {
    overflow: "hidden",
    whiteSpace: "noWrap",
    textOverflow: "ellipsis",
  },
});

const MyReplays = ({ navigation }) => {
  const [reviewLog, setReviewLog] = useState([]);

  const getReplays = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://www.cs.drexel.edu/~zt86/getReplays.php", requestOptions)
        .then((response) => response.json())
        .then((result) => setReviewLog(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReplays();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg",
      }}
      resizeMode="cover"
      blurRadius={7}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={styles.log}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            icon="refresh"
            mode="contained-tonal"
            onPress={() => getReplays()}
            style={{ flex: "1", marginTop: 10, maxWidth: 200 }}
          >
            Get Latest Replays
          </Button>
        </div>

        {reviewLog == [] ? (
          <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>
            Waiting For Some Cool Jams
          </Text>
        ) : (
          reviewLog.map((entry) => {
            return (
              <View style={styles.card} key={entry.id}>
                <Card
                  onPress={() =>
                    navigation.navigate("Song Replay", {
                      track: entry.track,
                      artist: entry.artist,
                      review: entry.review,
                      link: entry.link,
                      image: entry.image,
                    })
                  }
                >
                  <Card.Cover source={entry.image} width={350} height={350} />
                  <Card.Content>
                    <Text variant="headlineSmall" style={styles.textOverflow}>
                      {entry.track}
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        variant="titleMedium"
                        style={{
                          flex: "3",
                          overflow: "hidden",
                          whiteSpace: "noWrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {entry.artist}
                      </Text>
                      <Text
                        variant="headlineSmall"
                        style={{ flex: "1", textAlign: "right" }}
                      >
                        {entry.review}/5
                      </Text>
                    </div>
                  </Card.Content>
                </Card>
              </View>
            );
          })
        )}
      </ScrollView>
      <FAB
        icon="star-half-full"
        style={styles.fab}
        onPress={() => navigation.navigate("Add Replay")}
      />
    </ImageBackground>
  );
};

export default MyReplays;
