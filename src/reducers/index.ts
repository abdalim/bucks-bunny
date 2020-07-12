import { combineReducers } from 'redux';

import expensesReducer, { ExpensesState } from './expenses.reducer';

export type AppState = {
  expenses: ExpensesState
}

const rootReducer = combineReducers({
  expenses: expensesReducer,
});

export default rootReducer
