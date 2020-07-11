import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExpenseDetailsScreen from './screens/ExpenseDetails'
import ExpensesScreen from './screens/Expenses'

export type RootStackParamList = {
  Expenses: undefined
  ExpenseDetails: { id: number }
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Expenses">
        <Stack.Screen
          name="Expenses"
          component={ExpensesScreen}
        />
        <Stack.Screen
          name="ExpenseDetails"
          component={ExpenseDetailsScreen}
          options={({ route }) => ({ title: `Expense ${route.params.id} Details` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
