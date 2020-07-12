import { all, fork } from 'redux-saga/effects'

import { watchNewExpense } from './expense.saga'
import { watchGetAllExpenses } from './expenses.saga'

export function* rootSaga() {
  yield all([fork(watchNewExpense), fork(watchGetAllExpenses)])
}
