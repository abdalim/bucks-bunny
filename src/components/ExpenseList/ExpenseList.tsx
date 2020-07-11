import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import ExpenseListItem from '../ExpenseListItem/ExpenseListItem'
import { Expense } from '../../models/expense.model'

const ExpenseList: React.FunctionComponent<{
  expenses: Expense[]
  onPress: (item: Expense) => () => void
}> = (props) => {
  const theme = useTheme()

  const renderItem = React.useCallback(({ item }) => {
    return <ExpenseListItem expense={item} onPress={props.onPress(item)} />
  }, [])

  const keyExtractor = React.useCallback((item) => {
    return item.id.toString()
  }, [])

  return (
    <FlatList
      style={{ backgroundColor: theme.colors.background }}
      data={props.expenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  )
}

export default ExpenseList