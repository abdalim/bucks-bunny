import * as SQLite from 'expo-sqlite';

import { Expense } from '../models/expense.model'
import { ResultSet } from 'expo-sqlite';

const db = SQLite.openDatabase('db.expenses')

const TABLE = 'expense'

export type NewExpense = Omit<Expense, 'id'>

export const initTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `create table ${TABLE} (id integer primary key not null, item text not null, price int not null, createdAt int, updatedAt int);`,
      [],
      (t, data) => {
        console.log('Expenses table initialized')
      }
    )
  })
}

export const getAll = async (): Promise<Expense[]> => {
  return new Promise((resolve) => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from ${TABLE} order by updatedAt desc;`,
        [],
        (t, data) => {
          console.log('get all result', data)
          return resolve(data.rows._array)
        },
      )
    })
  })
}

export const add = async (expense: NewExpense) => {
  return new Promise((resolve) => {
    const timestamp = new Date().getTime()
    db.transaction(tx => {
      tx.executeSql(
        `insert into ${TABLE} (item, price, createdAt, updatedAt) values (?, ?, ?, ?);`,
        [expense.item, expense.price, timestamp, timestamp],
        (t, data) => {
          console.log('new expense added', data)
          return resolve(data.insertId)
        }
      )
    })
  })
}