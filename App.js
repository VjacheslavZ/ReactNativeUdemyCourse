import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.id !== goalId));

  const cancelGoalHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button
        title='Add new goal'
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalHandler}
      />
      
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
