import dummyExpenses from '../../data/expenses'

export const getAll = () => {
  // fake an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(dummyExpenses)
    }, 1000)
  })
}