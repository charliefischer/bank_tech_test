const Account = require('../src/account')
const Transaction = require('../src/transaction')
let account;

beforeEach(() => {
  account = new Account();
})

simplifiedDate = () => {
  let date = new Date()
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}

describe('transactions', () => {
  test('is an empty array initially', () => {
    expect(account.transactions).toStrictEqual([])
  })

  test('the deposit amount,date and balance are passed into transactions', () => {
    account.deposit(10)
    expect(account.transactions).toStrictEqual([{
      date: simplifiedDate(),
      type: 'credit',
      amount: '10.00', 
      balance: 10.00
    }])
  })

  test('the withdrawn amount, date and balance are passed into transactions', () => {
    account.deposit(10)
    account.withdraw(5)
    expect(account.transactions[1]).toStrictEqual({
      date: simplifiedDate(),
      type: 'debit',
      amount: '5.00',
      balance: 5.00
    })
  })
})

describe('printStatement', () => {
  test('returns a statement detailing the transaction', () => {
    account.deposit(10)
    expect(account.printStatement).toStrictEqual(
      `date || credit || debit || balance\n${simplifiedDate()} || 10.00 || || 10.00`
    )
  })

  test('returns a statement detailing all transactions and relevant info', () => {
    account.deposit(10)
    account.deposit(10)
    account.withdraw(5)
    expect(account.printStatement).toStrictEqual(
      `date || credit || debit || balance\n${simplifiedDate()} || || 5.00 || 15.00\n${simplifiedDate()} || 10.00 || || 20.00\n${simplifiedDate()} || 10.00 || || 10.00`
    )
  })
})