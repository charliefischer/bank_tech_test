const Transaction = require('../src/transaction')
const simplifiedDate = require('./helpers')
let date = simplifiedDate()

test('the deposit amount,date and balance are passed into transactions', () => {
  let transaction = new Transaction('credit', 10, 10.00, date)
  expect(transaction.type).toEqual('credit')
  expect(transaction.amount).toEqual(10)
  expect(transaction.balance).toEqual(10.00)
  expect(transaction.date).toEqual(date)
})