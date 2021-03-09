// import Transaction from './transaction'
const Transaction = require('../src/transaction')

class Account {
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  showBalance() {
    return this.balance
  }

  showTransactions() {
    return this.transactions
  }

  get printStatement() {
    return this.#printAllTransactions()
  }

  deposit(amount) {
    (this.balance += amount).toFixed(2)

    this.transactions.push(
      new Transaction(
        'credit', 
        amount, 
        this.balance, 
        this.#simplifiedDate()
      )
    )
    return "New balance: £" + this.balance.toFixed(2)
  }

  withdraw(amount) {
    if (this.balance - amount < 0) throw new Error('Insufficient funds');
    
    (this.balance -= amount).toFixed(2)
    this.transactions.push(
      new Transaction(
        'debit', 
        amount, 
        this.balance, 
        this.#simplifiedDate()
      )
    )
    return "New balance: £" + this.balance.toFixed(2)
  }

  // private methods below
  
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

  #simplifiedDate() {
    let date = new Date()
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  }

}



account = new Account();


module.exports =  Account