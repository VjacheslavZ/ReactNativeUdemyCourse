import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => setCourseGoals(currentGoals => [
    ...currentGoals, 
    { id: Math.random().toString(), value: goalTitle }
  ]);

   const removeGoalHandler = goalId => {
     setCourseGoals(currentGoals => {
       return currentGoals.filter(goal => goal.id !== goalId)
     })
   }

  return (
    <View style={styles.screen}>
      <GoalInput
        onAddGoal={addGoalHandler}
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
