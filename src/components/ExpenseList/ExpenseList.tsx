import dayjs from 'dayjs'
import React from 'react'
import { SectionList, View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import ExpenseListItem from '../ExpenseListItem/ExpenseListItem'
import { Expense } from '../../models/expense.model'

type ListData = { title: string; data: Expense[] }[]

const getSectionData = (expenses: Expense[]) => {
  let currDate: string
  return expenses.reduce((acc: ListData, currExpense: Expense) => {
    const currSpendDate = dayjs(currExpense.createdAt).format('DD MMM YYYY')
    if (!currDate || currDate !== currSpendDate) {
      currDate = currSpendDate
      acc.push({
        title: currSpendDate,
        data: [currExpense]
      })
      return acc
    } else {
      acc[acc.length-1].data.push(currExpense)
      return acc
    }
  }, [])
}

const ExpenseList: React.FunctionComponent<{
  expenses: Expense[]
  onPress: (item: Expense) => () => void
}> = (props) => {
  const theme = useTheme()

  const renderItem = React.useCallback(({ item }) => {
    return <ExpenseListItem expense={item} onPress={props.onPress(item)} />
  }, [])

  const renderSectionHeader = React.useCallback(({ section: { title }}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{ title }</Text>
      </View>
    )
  }, [])

  const keyExtractor = React.useCallback((item) => {
    return item.id.toString()
  }, [])

  return (
    <SectionList
      style={{ backgroundColor: theme.colors.background }}
      sections={getSectionData(props.expenses)}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#eee',
    padding: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ExpenseList