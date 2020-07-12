import { put, call } from 'redux-saga/effects'

import * as actions from '../actions/expenses.action'
import * as expensesService from '../services/expenses.service'

export function* fetchExpenses() {
  yield put(actions.requestExpenses())
  const expenses = yield call(expensesService.getAll)
  yield put(actions.receivedExpenses(expenses))
}
