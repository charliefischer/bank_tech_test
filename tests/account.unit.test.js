const Account = require('../src/account')
let account;

beforeEach(() => {
  account = new Account();
})

describe('balance', () => {
  test('has an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  })
})

describe('deposit', () => {
  test('you can make deposits', () => {
    expect(account.deposit(10)).toEqual('New balance: £10.00')
  })
  
  test('you can make multiple deposits', () => {
    account.deposit(10)
    expect(account.deposit(20)).toEqual('New balance: £30.00')
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
})

describe('transactions', () => {
  test('is an empty array initially', () => {
    expect(account.transactions).toStrictEqual([])
  })

  test('the deposit amount and the date are passed into transactions', () => {
    account.deposit(10)
    expect(account.transactions).toStrictEqual([{
      date: new Date(),
      type: 'credit',
      amount: 10, 
      balance: 10
    }])
  })
})
