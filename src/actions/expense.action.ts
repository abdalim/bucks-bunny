import { NewExpense } from '../db/expenses.db'
import { Expense } from '../models/expense.model'

export enum ExpenseAction {
  AddNewExpense = 'AddNewExpense',
  AddExpenseRequest = 'AddExpenseRequest',
  AddExpenseSuccessful = 'AddExpenseSuccessful',
  AddExpenseFailed = 'AddExpenseFailed',
  ClearForm = 'ExpenseFormClear',
}

export const clearForm = () => {
  return {
    type: ExpenseAction.ClearForm,
    payload: {
      expense: undefined,
      error: undefined,
      isRequesting: false,
    },
  }
}

export const addNewExpense = (expense: NewExpense) => {
  return {
    type: ExpenseAction.AddNewExpense,
    newExpense: expense,
  }
}

export const requestNewExpense = () => {
  return {
    type: ExpenseAction.AddExpenseRequest,
    payload: {
      expense: undefined,
      error: undefined,
      isRequesting: true,
    },
  }
}

export const addedNewExpense = (expense: Expense) => {
  return {
    type: ExpenseAction.AddExpenseSuccessful,
    payload: {
      expense,
      error: undefined,
      isRequesting: false,
    },
  }
}
