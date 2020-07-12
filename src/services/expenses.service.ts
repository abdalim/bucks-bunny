/**
 * Fake Expenses Service, calls a DB instead of a remote API service
 */

import * as expensesDB from '../db/expenses.db'
import { Expense } from '../models/expense.model'

export const getAll = () => {
  return new Promise((resolve) => {
    expensesDB.getAll().then((expenses: Expense[]) => {
      resolve(
        expenses.map((expense) => {
          return {
            ...expense,
            price: expense.price / 100,
          }
        })
      )
    })
  })
}

export const add = (expense: expensesDB.NewExpense) => {
  return new Promise((resolve) => {
    expensesDB.add(expense).then((insertedId) => resolve(Boolean(insertedId)))
  })
}
