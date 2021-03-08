const Bank = require('../src/bank')

test('it returns hello', () => {
  let account = new Bank()
  expect(account.hello()).toBe('hello')
})