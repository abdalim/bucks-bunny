import { put, call, take } from 'redux-saga/effects'

import * as actions from '../actions/expenses.action'
import * as expensesService from '../services/expenses.service'

export function* fetchExpenses() {
  const expenses = yield call(expensesService.getAll)
  yield put(actions.receivedExpenses(expenses))
}

export function* watchGetAllExpenses() {
  while (true) {
    yield take(actions.ExpensesAction.FetchListRequest)
    yield call(fetchExpenses)
  }
}
