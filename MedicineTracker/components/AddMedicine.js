import React, { useEffect, useState } from "react";
import { TextInput, Text, Button } from "react-native-paper";
import { StyleSheet, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  profile: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  disclosure: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 14,
    display: "flex",
    alignSelf: "center",
  },
});

const AddMedicine = () => {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");

  submitMedicine = async () => {
    if (name == "") {
      Alert.alert("Error: Please enter a name", [{ text: "Close" }]);
    } else if (dosage == "") {
      Alert.alert("Error: Please enter a dosage", [{ text: "Close" }]);
    } else {
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("dosage", dosage);

        const datetime = new Date().toString();

        fetch(
          `https://www.cs.drexel.edu/~zt86/addMedicine.php?name=${name}&dosage=${dosage}&date=${datetime}`
        )
          .then((response) => response.text())
          .then((data) => {
            if (data === "1") {
              Alert.alert("Success", "Medicine logged successfully!", [
                { text: "Close" },
              ]);
            } else {
              Alert.alert("Error", "Failed to log medicine.", [
                { text: "Close" },
              ]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {}
    }
  };

  const getMedicine = async () => {
    try {
      const tempName = await AsyncStorage.getItem("name");
      const tempDosage = await AsyncStorage.getItem("dosage");

      if (tempName !== null) {
        setName(tempName);
      }
      if (tempDosage !== null) {
        setDosage(tempDosage);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getMedicine();
  }, []);

  return (
    <View style={styles.profile}>
      <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>
        Add Medicine
      </Text>

      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={(name) => setName(name)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Dosage"
        value={dosage}
        mode="outlined"
        onChangeText={(dosage) => setDosage(dosage)}
        style={{ marginBottom: 10 }}
      />

      <Text style={styles.disclosure}>
        Date and time are automatically saved
      </Text>

      <Button
        mode="contained"
        buttonColor="rgb(2, 161, 36)"
        onPress={() => submitMedicine()}
        style={{ alignSelf: "center" }}
      >
        SAVE
      </Button>
    </View>
  );
};

export default AddMedicine;
