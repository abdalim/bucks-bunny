import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik'
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { RootStackParamList } from '../../App'
import { addNewExpense, clearForm } from '../actions/expense.action'
import { NewExpense } from '../db/expenses.db'
import { AppState } from '../reducers'

type ExpenseFormScreenRouteProp = RouteProp<RootStackParamList, 'ExpenseForm'>

export default function ExpenseForm () {
  const dispatch = useDispatch()
  const expenseStore = useSelector((state: AppState) => state.expense)
  const navigation = useNavigation()
  const route = useRoute<ExpenseFormScreenRouteProp>()

  const isCreate = route.params.isCreate

  const onSubmitButtonPressed = React.useCallback((values) => {
    const newExpense: NewExpense = {
      item: values.item,
      price: Math.round(parseFloat(values.price) * 100)
    }
    console.log('onSubmitButtonPressed', { values, newExpense })
    dispatch(addNewExpense(newExpense))
  }, [])

  // redirect to expenses page once successful
  React.useEffect(() => {
    if (expenseStore.expense) {
      navigation.navigate('Expenses')
      dispatch(clearForm())
    }
  }, [expenseStore])

  const initialValues = {
    item: '',
    price: '',
  }

  const validationSchema = Yup.object().shape({
    item: Yup.string().required(),
    price: Yup.number().required(),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitButtonPressed}
      validationSchema={validationSchema}
    >
      {({
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        dirty,
        isValid,
        values
      }) => (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <TextInput
            mode="outlined"
            label="Item"
            placeholder="Item name"
            style={styles.input}
            onChangeText={handleChange('item')}
            onBlur={handleBlur('item')}
            value={values.item}
            error={Boolean(errors.item && touched.item)}
          />
          <TextInput
            mode="outlined"
            label="Price"
            placeholder="Item price"
            keyboardType="decimal-pad"
            style={styles.input}
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price}
            error={Boolean(errors.price && touched.price)}
          />
          <Button
            mode="contained"
            contentStyle={{ padding: 8 }}
            onPress={handleSubmit}
            disabled={!dirty || !isValid || expenseStore.isRequesting}
          >
            {isCreate ? 'Add' : 'Update'}
          </Button>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});
