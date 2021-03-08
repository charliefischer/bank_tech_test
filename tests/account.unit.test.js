const Account = require('../src/account')
let account;

beforeEach(() => {
  account = new Account();
})

test('has an initial balance of 0', () => {
  expect(account.balance()).toEqual(0)
})

test('you can make deposits', () => {
  expect(account.deposit(10)).toEqual('New balance: £10.00')
})

test('you can make multiple deposits', () => {
  account.deposit(10)
  expect(account.deposit(20)).toEqual('New balance: £30.00')
})