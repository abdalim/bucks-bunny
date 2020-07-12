import * as SQLite from 'expo-sqlite';

import { Expense } from '../models/expense.model'

const db = SQLite.openDatabase('db.expenses')

const TABLE = 'expensev4'

export type NewExpense = Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>

export const initTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `create table if not exists ${TABLE} (id integer primary key not null, item text not null, price int not null, createdAt int, updatedAt int);`,
      [],
      (t, data) => {
        console.log('Expenses table initialized')
      },
      (t, e) => {
        console.error('Failed to create table', e)
        return true
      }
    )
  })
}

export const getAll = async (): Promise<Expense[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from ${TABLE} order by updatedAt desc;`,
        [],
        (t, data) => {
          console.log('get all result', data)
          return resolve(data.rows._array)
        },
        (t, e) => {
          console.error('Failed to fetch all expenses from DB', e)
          reject(e)
          return true
        }
      )
    })
  })
}

export const add = async (expense: NewExpense) => {
  return new Promise((resolve, reject) => {
    const timestamp = new Date().getTime()
    db.transaction(tx => {
      tx.executeSql(
        `insert into ${TABLE} (item, price, createdAt, updatedAt) values (?, ?, ?, ?);`,
        [expense.item, expense.price, timestamp, timestamp],
        (t, data) => {
          console.log('new expense added', data)
          return resolve(data.insertId)
        },
        (t, e) => {
          console.error('Failed to add new expense in DB', e)
          reject(e)
          return true
        }
      )
    })
  })
}