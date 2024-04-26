import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [currToDo, setCurrToDo] = useState('')
  const [todo, setToDo] = useState([])

  const handleInput = () => {
    if (currToDo != '') {
      setToDo([...todo, currToDo])
    }
  }

  const clearList = () => {
    setToDo([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>TO-DO</Text>
        {/* <Button onPress={() => clearList()} color="red" title="Add"/> */}
      </View>
      <FlatList style={styles.list} data={todo} renderItem={({item}) => <Text style={styles.item}>{item}</Text>} />
      <View style={styles.input}>
        <TextInput
          autoFocus
          placeholder='Give your mind a break'
          onChangeText={(newToDo) => setCurrToDo(newToDo)}
          style={styles.inputText}
        />
        <Button onPress={() => handleInput()} color="green" title="Add"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  headerSection: {
    flexDirection: 'row',
    flex: 0.5
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    flex: 0.7
  },
  list: {
    height: '60%'
  },
  itemGroup: {
    flexDirection: 'row'
  },
  item: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 4,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  input: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputText: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 5,
    width: '80%'
  },
});
