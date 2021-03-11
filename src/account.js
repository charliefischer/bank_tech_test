const Transaction = require('../src/transaction')
const PrintStatement = require('../src/printStatement')

class Account {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  deposit(amount) {
    if (this.#isAmountValid(amount)) {
      throw new Error('Please re-enter the amount as a positive integer')
    }
  
    (this.#credit(amount)).toFixed(2)
    this.transactions.push(
      new Transaction(
        'credit',
        amount,
        this.balance
      )
    )
    return this.#displayBalance()
  }

  withdraw(amount) {
    if (this.#isAmountValid(amount)) throw new Error('Please re-enter the amount as a positive integer')
    if (this.#isInsufficientFunds(amount)) throw new Error('Insufficient funds');

    (this.#debit(amount)).toFixed(2)
    this.transactions.push(
      new Transaction(
        'debit',
        amount,
        this.balance
      )
    )
    return this.#displayBalance()
  }

  get printStatement() {
    return new PrintStatement(this.transactions).statement
  }

  #isAmountValid(amount) {
    return (amount < 0.01 || !Number.isInteger(Math.floor(amount)))
  }

  #isInsufficientFunds(amount) {
    return this.balance - amount < 0
  }
  

  #displayBalance() {
    return "New balance: £" + this.balance.toFixed(2)
  }

  #debit(amount) {
    return this.balance -= amount
  }

  #credit(amount) {
    return this.balance += amount
  }
}

myAccount = new Account();

module.exports = Account