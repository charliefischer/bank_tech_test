const Transaction = require('../src/transaction')

const simplifiedDate = require('./helpers')
let date = simplifiedDate()
const mockDate = jest.fn(() => {
  let date = new Date('2019-05-14T11:01:58.135Z')
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return `${month}.${year}`
})


test('the deposit amount,date and balance are passed into transactions', () => {
  let transaction = new Transaction('credit', 10, 10.00)
  expect(transaction.type).toEqual('credit')
  expect(transaction.amount).toEqual(10)
  expect(transaction.balance).toEqual(10.00)
  expect(transaction.date).toEqual(date)
})

test('the transactions can take a hardcoded date', () => {
  let transaction = new Transaction('credit', 10, 10.00, '1/1/2000')

  expect(transaction.date).toEqual('1/1/2000')
})

test('the transactions can take a cn injected date class for alternative formatting', () => {
  let transaction = new Transaction('credit', 10, 10.00, mockDate())

  expect(transaction.date).toEqual('5.2019')
})
