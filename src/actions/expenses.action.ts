import { Expense } from '../models/expense.model'

export enum ExpensesAction {
  FetchListRequest = 'FetchListRequest',
  FetchListSuccessful = 'FetchListSuccessful',
  FetchListFailure = 'FetchListFailure',
}

export const requestExpenses = () => {
  return {
    type: ExpensesAction.FetchListRequest,
    payload: {
      error: undefined,
      isFetching: true,
    }
  }
}

export const receivedExpenses = (expenses: Expense[]) => {
  return {
    type: ExpensesAction.FetchListSuccessful,
    payload: {
      items: expenses,
      error: undefined,
      isFetching: false,
      lastFetchedAt: new Date().getTime(),
    }
  }
}
