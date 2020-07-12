import { AnyAction } from 'redux'

import { ExpenseAction } from '../actions/expense.action'
import { Expense } from '../models/expense.model'

export type ExpenseState = {
  expense?: Expense
  error?: Error
  isRequesting: boolean
}

const initialState = {
  expense: undefined,
  error: undefined,
  isRequesting: false,
}

const expenseReducer = (state: ExpenseState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ExpenseAction.AddExpenseRequest:
    case ExpenseAction.AddExpenseSuccessful:
    case ExpenseAction.AddExpenseFailed:
    case ExpenseAction.ClearForm:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default expenseReducer
