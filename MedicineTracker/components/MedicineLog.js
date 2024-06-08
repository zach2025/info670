import React, { useEffect, useState } from "react";
import { Card, Text, IconButton } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";

const styles = StyleSheet.create({
  log: {
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

const MedicineLog = () => {
  const [medicineLog, setMedicineLog] = useState([]);

  const getMedicine = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://www.cs.drexel.edu/~zt86/getMedicine.php", requestOptions)
        .then((response) => response.json())
        .then((result) => setMedicineLog(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMedicine();
  }, []);

  return (
    <ScrollView style={styles.log}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>
          Medicine Log
        </Text>

        <IconButton
          icon="refresh"
          size={30}
          onPress={() => getMedicine()}
          style={{ flex: "1" }}
        />
      </div>

      {medicineLog == [] ? (
        <Text style={{ marginBottom: 20, fontWeight: "700", fontSize: 40 }}>
          No medicine listed
        </Text>
      ) : (
        medicineLog.map((entry) => {
          return (
            <View style={styles.card} key={entry.date}>
              <Card>
                <Card.Content>
                  <Text variant="headlineSmall">{entry.name}</Text>
                  <Text variant="headlineSmall">{entry.dosage}</Text>
                  <Text variant="titleSmall">{entry.date}</Text>
                </Card.Content>
              </Card>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

export default MedicineLog;
