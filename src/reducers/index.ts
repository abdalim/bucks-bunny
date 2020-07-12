import { combineReducers } from 'redux';

import expenseReducer, { ExpenseState } from './expense.reducer';
import expensesReducer, { ExpensesState } from './expenses.reducer';

export type AppState = {
  expense: ExpenseState
  expenses: ExpensesState
}

const rootReducer = combineReducers({
  expense: expenseReducer,
  expenses: expensesReducer,
});

export default rootReducer
