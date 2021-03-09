const Account = require('../src/account')
const Transaction = require('../src/account')
// const simplifiedDate = require('./helpers')
let account;
let date;

simplifiedDate = () => {
  let date = new Date()
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}

beforeEach(() => {
  account = new Account();
  date = simplifiedDate();
})

describe('initializing', () => {
  test('has an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  })
  test('is an empty array initially', () => {
    expect(account.transactions).toStrictEqual([])
  })
})

describe('deposit', () => {
  test('you can make deposits', () => {
    expect(account.deposit(10)).toEqual('New balance: £10.00')
  })

  test('you can make deposits that include pennies', () => {
    expect(account.deposit(0.01)).toEqual('New balance: £0.01')
  })

  test('you can make multiple deposits', () => {
    account.deposit(10)
    expect(account.deposit(20)).toEqual('New balance: £30.00')
  })

  test('you can not deposit anything other than an integer', () => {
    expect(() => {
      account.deposit('ten')
    }).toThrow('Please re-enter the amount as a positive integer')
  })

  test('you can not deposit a negative value', () => {
    expect(() => {
      account.deposit(-10)
    }).toThrow('Please re-enter the amount as a positive integer')
  })
})

describe('withdraw', () => {
  test('you can make withdrawals', () => {
    account.deposit(10)
    expect(account.withdraw(10)).toEqual('New balance: £0.00')
  })

  test('you can make multiple withdrawals', () => {
    account.deposit(100)
    account.withdraw(10)
    expect(account.withdraw(10)).toEqual('New balance: £80.00')
  })

  test('you can not withdraw more money than you have', () => {
    expect(() => {
      account.withdraw(10)
    }).toThrow('Insufficient funds')
  })

  test('you can not withdraw anything other than an integer', () => {
    expect(() => {
      account.withdraw('ten')
    }).toThrow('Please re-enter the amount as a positive integer')
  })

  test('you can not withdraw a negative value', () => {
    expect(() => {
      account.withdraw(-10)
    }).toThrow('Please re-enter the amount as a positive integer')
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