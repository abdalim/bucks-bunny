import { useFocusEffect, useRoute, RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DataTable, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'

import { RootStackParamList } from '../../App'
import { Expense } from '../models/expense.model'
import { AppState } from '../reducers'

type ExpenseDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ExpenseDetails'
>

export default function ExpenseDetails() {
  const route = useRoute<ExpenseDetailsScreenRouteProp>()
  const expensesStore = useSelector((state: AppState) => state.expenses)

  const [expense, setExpense] = React.useState<Expense | undefined>(undefined)

  useFocusEffect(
    React.useCallback(() => {
      const expenseId = route.params.id
      setExpense(expensesStore.items?.find((item) => item.id === expenseId))
    }, [])
  )

  const containerStyles = expense
    ? { ...styles.container }
    : { ...styles.container, ...styles.centerContainer }

  return (
    <View style={containerStyles}>
      <StatusBar style="auto" />
      {!expense && <Text>Expense does not exists</Text>}
      {expense && (
        <DataTable>
          <DataTable.Row>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Cell>{expense.id}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Cell>{expense.item}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Cell>{expense.price}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
