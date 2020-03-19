import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnterGoal] = useState('');
  const [courseGols, setCourseGoals] = useState([]);

  const golaInputHandler = enteredText => setEnterGoal(enteredText);
  const addGoalHandler = () => setCourseGoals(currentGoals => [
    ...currentGoals, 
    { key: Math.random().toString(), value: enteredGoal }
  ])

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='xxx'
          style={styles.input}
          onChangeText={golaInputHandler}
          value={enteredGoal}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      
      <FlatList
        data={courseGols}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1
  }
});
