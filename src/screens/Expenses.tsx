import { useIsFocused, useFocusEffect, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Portal, FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

import { requestExpenses } from '../actions/expenses.action'
import ExpenseList from '../components/ExpenseList/ExpenseList'
import { Expense } from '../models/expense.model'
import { AppState } from '../reducers'

const Expenses: React.FunctionComponent = () => {
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const expensesStore = useSelector((state: AppState) => state.expenses)
  const dispatch = useDispatch()
  
  const onExpenseItemPressedFactory = React.useCallback((item: Expense) => () => {
    navigation.navigate('ExpenseDetails', {
      id: item.id
    })
  }, [])

  const onAddExpensePressed = React.useCallback(() => {
    navigation.navigate('ExpenseForm', { isCreate: true })
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      console.log('navigated to Expenses page')
      dispatch(requestExpenses())
    }, [])
  )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {expensesStore.items && expensesStore.items.length > 0 &&
        <ExpenseList expenses={expensesStore.items} onPress={onExpenseItemPressedFactory} />
      }
      <Portal>
        <FAB
          visible={isFocused}
          icon="plus"
          onPress={onAddExpensePressed}
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
        />
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Expenses
