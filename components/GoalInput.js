import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal,visible, onCancel }) => {
  const [enteredGoal, setEnterGoal] = useState('');

  const goalInputHandler = enteredText => setEnterGoal(enteredText);
  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnterGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='CANCEL' color='red' onPress={onCancel}/>
        <Button title='Add' onPress={addGoalHandler} />
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    width: '80%',
    marginBottom: 10
  }
});

export default GoalInput