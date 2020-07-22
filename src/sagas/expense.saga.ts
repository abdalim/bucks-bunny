import { put, call, take } from 'redux-saga/effects'

import * as actions from '../actions/expense.action'
import * as expensesService from '../services/expenses.service'
import * as navigationService from '../services/navigation.service'

import { fetchExpenses } from './expenses.saga'

export function* watchNewExpense() {
  while (true) {
    const { newExpense } = yield take(actions.ExpenseAction.AddNewExpense)
    const newExpenseId = yield call(expensesService.add, newExpense)
    yield put(actions.addedNewExpense({ id: newExpenseId, ...newExpense }))
    yield call(fetchExpenses)
    navigationService.navigate('Expenses')
    yield put(actions.clearForm())
  }
}
