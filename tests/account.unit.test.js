const Account = require('../src/account')
let account;

beforeEach(() => {
  account = new Account();
})

test('has an initial balance of 0', () => {
  expect(account.balance).toBe(0)
})

test('you can make deposits', () => {
  expect(account.deposit(10)).toEqual('New balance: £10.00')
})