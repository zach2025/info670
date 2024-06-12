import React, { useEffect, useState } from "react";
import { Card, Text, Button, Searchbar } from "react-native-paper";
import { StyleSheet, View, Alert, ScrollView, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { Pressable } from "react-native";

const styles = StyleSheet.create({
  profile: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    flex: 1,
    width: 360,
    height: 360,
    padding: 10,
    paddingLeft: 20
  },
  textOverflow: {
    overflow: "hidden",
    whiteSpace: "noWrap",
    textOverflow: "ellipsis",
  },
});

const AddReplay = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const sdk = SpotifyApi.withClientCredentials(
    process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID,
    process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET
  );

  submitQuery = async () => {
    if (query === "") {
      await AsyncStorage.setItem("query", query);
      Alert.alert("Error: Please enter a song", [{ text: "Close" }]);
    } else {
      try {
        await AsyncStorage.setItem("query", query);
        const temp = await sdk.search(query, ["track"]);
        setResults(temp.tracks.items);
      } catch (e) {}
    }
  };

  const getQuery = async () => {
    try {
      const tempQuery = await AsyncStorage.getItem("query");
      if (tempQuery !== null) {
        setQuery(tempQuery);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getQuery();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg",
      }}
      resizeMode='cover'
      blurRadius={7}
      style={{ width: "100%", height: "100%" }}
    >
    <ScrollView style={styles.profile}>
      <Searchbar
        placeholder="Search for a song"
        onChangeText={(query) => setQuery(query)}
        value={query}
      />

      <Button
        mode='contained-tonal'
        onPress={() => submitQuery()}
        style={{ alignSelf: "center", marginTop: 10 }}
      >
        Search
      </Button>

      {results == {} ? (
        <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>
          Waiting For Some Cool Jams
        </Text>
      ) : (
        results.map((entry, index) => {
          return (
            <View style={styles.card} key={index}>
              <Pressable
                onPress={() => navigation.navigate("Song Review", {
                  track: entry.name,
                  artist: entry.artists[0].name,
                  link: entry.external_urls.spotify,
                  image: entry.album.images[1].url,
                  square: entry.album.images[1].width
                })}>
                <Card>
                  <Card.Cover source={entry.album.images[1].url} width={entry.album.images[1].width} height={entry.album.images[1].height} />
                  <Card.Content>
                    <Text variant="headlineSmall" style={styles.textOverflow}>{entry.name}</Text>
                    <Text variant="titleLarge" style={styles.textOverflow}>{entry.artists[0].name}</Text>
                  </Card.Content>
                </Card>
              </Pressable>
            </View>
          );
        })
      )}
    </ScrollView>
    </ImageBackground>
  );
};

export default AddReplay;
