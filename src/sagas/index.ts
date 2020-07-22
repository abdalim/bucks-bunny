import { all, fork } from 'redux-saga/effects'

import { watchNewExpense } from './expense.saga'
import { getAllExpenses, watchGetAllExpenses } from './expenses.saga'

export function* rootSaga() {
  yield all([
    fork(getAllExpenses),
    fork(watchNewExpense),
    fork(watchGetAllExpenses),
  ])
}
