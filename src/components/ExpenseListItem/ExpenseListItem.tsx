import React from 'react'
import { StyleSheet, View } from 'react-native';
import {
  Surface,
  Title,
  TouchableRipple,
} from 'react-native-paper';

import { Expense } from '../../models/expense.model'

const ExpenseListItem: React.FunctionComponent<{
  expense: Expense
  onPress: () => void
}> = (props) => {
  return (
    <TouchableRipple onPress={props.onPress}>
      <Surface style={styles.container}>
        {/* Item */}
        <View style={styles.item}>
          <Title>{props.expense.item}</Title>
        </View>
        {/* Price */}
        <View style={styles.price}>
          <Title>{props.expense.price.toFixed(2)}</Title>
        </View>
      </Surface>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    flexGrow: 0.6,
  },
  price: {
    flexGrow: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})

export default ExpenseListItem