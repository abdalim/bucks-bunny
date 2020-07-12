import { AnyAction } from 'redux'

import { ExpensesAction } from '../actions/expenses.action'
import { Expense } from '../models/expense.model'

export type ExpensesState = {
  items?: Expense[]
  error?: Error
  isFetching: boolean
  lastFetchedAt?: number
}

const initialState = {
  items: undefined,
  error: undefined,
  isFetching: false,
  lastFetchedAt: undefined,
}

const expensesReducer = (
  state: ExpensesState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ExpensesAction.FetchListRequest:
    case ExpensesAction.FetchListSuccessful:
    case ExpensesAction.FetchListFailure:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default expensesReducer
