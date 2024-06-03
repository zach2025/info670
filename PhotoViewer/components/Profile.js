import React, { useEffect, useState } from "react";
import {
  TextInput,
  Text,
  Button,
  RadioButton,
  Switch,
} from "react-native-paper";
import { StyleSheet, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notif, setNotif] = useState(false);
  const [pref, setPref] = useState("never");

  submitProfile = async () => {
    if (name == "") {
      Alert.alert("Error: Please enter a username", [{ text: "Close" }]);
    } else if (email == "") {
      Alert.alert("Error: Please enter an email", [{ text: "Close" }]);
    } else {
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("notif", JSON.stringify(notif));
        await AsyncStorage.setItem("pref", pref);
      } catch (e) {}
    }
  };

  const getProfile = async () => {
    try {
      const tempName = await AsyncStorage.getItem("name");
      const tempEmail = await AsyncStorage.getItem("email");
      const tempNotif = await AsyncStorage.getItem("notif", (e, value) => {
        if (e) {
        } else {
          JSON.parse(value);
        }
      });
      const tempPref = await AsyncStorage.getItem("pref");

      if (tempName !== null) {
        setName(valueName);
      }
      if (tempEmail !== null) {
        setEmail(valueEmail);
      }
      if (tempNotif !== null) {
        setNotif(notif);
      }
      if (tempPref !== null) {
        setPref(pref);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View style={styles.profile}>
      <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>Profile</Text>

      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={(name) => setName(name)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={(email) => setEmail(email)}
        style={{ marginBottom: 10 }}
      />

      <Text style={{ marginTop: 20, fontWeight: "700", fontSize: 20 }}>
        Notifications
      </Text>
      <View style={styles.radioButton}>
        <Text>Recieve notifications?</Text>
        <Switch color={'rgb(178, 2, 247)'} value={notif} onValueChange={() => setNotif(!notif)} />
      </View>

      <Text>Notification Preference</Text>
      <RadioButton.Group
        onValueChange={(value) => setValueRB(value)}
        value={pref}
      >
        <View style={styles.radioButton}>
          <RadioButton value="daily" />
          <Text>Daily</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="biweekly" />
          <Text>Biweekly (Twice Per Week)</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="weekly" />
          <Text>Weekly</Text>
        </View>
      </RadioButton.Group>

      <Button
        mode="contained"
        buttonColor="rgb(178, 2, 247)"
        onPress={() => submitProfile()}
        style={{ alignSelf: "center" }}
      >
        SAVE
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Profile;
