import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnterGoal] = useState('');

  const goalInputHandler = enteredText => setEnterGoal(enteredText);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='Add' onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
});

export default GoalInput