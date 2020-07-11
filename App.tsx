import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import ExpenseDetailsScreen from './src/screens/ExpenseDetails'
import ExpenseFormScreen from './src/screens/ExpenseForm'
import ExpensesScreen from './src/screens/Expenses'

export type RootStackParamList = {
  Expenses: undefined
  ExpenseDetails: { id: number }
  ExpenseForm: { isCreate: boolean, id?: number }
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
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
          <Stack.Screen
            name="ExpenseForm"
            component={ExpenseFormScreen}
            options={({ route }) => ({ title: route.params.isCreate ? 'New Expense' : 'Edit Expense' })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
