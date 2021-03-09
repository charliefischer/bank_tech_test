const Transaction = require('../src/transaction')

class Account {
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  get printStatement() {
    return this.#printAllTransactions()
  }

  deposit(amount) {
    if(this.#isAmountValid(amount)){
      throw new Error('Please re-enter the amount as a positive integer')
    }

    (this.#credit(amount)).toFixed(2)

    this.transactions.push(
      new Transaction(
        'credit', 
        amount, 
        this.balance, 
        this.#simplifiedDate()
      )
    )
    return this.#displayBalance()
  }

  withdraw(amount) {
    if(this.#isAmountValid(amount)){
      throw new Error('Please re-enter the amount as a positive integer')
    }
    if (this.#isInsufficientFunds(amount)) throw new Error('Insufficient funds');
    
    (this.#debit(amount)).toFixed(2)
    this.transactions.push(
      new Transaction(
        'debit', 
        amount, 
        this.balance, 
        this.#simplifiedDate()
      )
    )
    return this.#displayBalance()
  }

  // private methods 
  
  #printAllTransactions() {
    let str = 'date || credit || debit || balance'
    for(let i = this.transactions.length - 1; i >= 0; i--) {
      if(this.transactions[i].type === 'credit') {
        str += '\n' + this.transactions[i].date + ' || ' + this.transactions[i].amount.toFixed(2) + ' || || ' + this.transactions[i].balance.toFixed(2)
      } else {
        str += '\n' + this.transactions[i].date + ' || || ' + this.transactions[i].amount.toFixed(2) + ' || ' + this.transactions[i].balance.toFixed(2)
      } 
    } return str
  }

  #isAmountValid(amount) {
    return (amount < 0.01 || !Number.isInteger(Math.floor(amount)))
  }

  #simplifiedDate() {
    let date = new Date()
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  }

  #isInsufficientFunds(amount) {
    return this.balance - amount < 0
  }

  #debit(amount) {
    return this.balance -= amount
  }

  #credit(amount) {
   return this.balance += amount 
  }

  #displayBalance() {
    return "New balance: £" + this.balance.toFixed(2)
  }

}

console.log(
  `Welcome to your account.\n
  To deposit money => myAccount.deposit(enter the amount here)\n
  To withdraw money => myAccount.deposit(enter the amount here)\n
  To view your statement => myAccount.printStatement\n
  To exit => ctrl + d`
)
myAccount = new Account();

module.exports =  Account