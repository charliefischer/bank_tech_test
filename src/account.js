const Transaction = require('../src/transaction')

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
    return this.#printAllTransactions()
  }

  #printAllTransactions() {
    let str = 'date || credit || debit || balance'
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      if (this.transactions[i].type === 'credit') {
        str += '\n' + 
        this.transactions[i].date + 
        ' || ' + 
        this.transactions[i].amount.toFixed(2) + 
        ' || || ' + 
        this.transactions[i].balance.toFixed(2)
      } else {
        str += '\n' + 
        this.transactions[i].date + 
        ' || || ' + 
        this.transactions[i].amount.toFixed(2) + 
        ' || ' + 
        this.transactions[i].balance.toFixed(2)
      }
    }
    return str
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