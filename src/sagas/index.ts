import { all, fork} from 'redux-saga/effects';

import { fetchExpenses } from './expenses.saga';

export function* rootSaga () {
  yield all([
    fork(fetchExpenses),
  ]);
};
