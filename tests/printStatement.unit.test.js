const PrintStatement = require('../src/printStatement')

describe('PrintStatement', () => {
  test('it returns a formatted statment when passed in an array of transactions in chronological order', () => {
    let deposit = {
      date: '01/02/2020',
      type: 'credit',
      amount: 10,
      balance: 10
    }
    let withdraw = {
      date: '02/02/2020',
      type: 'debit',
      amount: 5,
      balance: 5
    }

    let transactions = []
    transactions.push(deposit)
    transactions.push(withdraw)

    let testStatement = new PrintStatement(transactions)
    expect(testStatement.statement).toStrictEqual(
      `date || credit || debit || balance\n02/02/2020 || || 5.00 || 5.00\n01/02/2020 || 10.00 || || 10.00`
    )
  })
})