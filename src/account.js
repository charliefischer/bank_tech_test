class Account {
    #balance = 0
    #transactions = []

  get balance() {
    return this.#balance
  }

  get transactions() {
    return this.#transactions
  }

  deposit(amount) {
    (this.#balance += amount).toFixed(2)
    this.transactions.push({
      date: this.#simplifiedDate(),
      type: 'credit',
      amount: amount.toFixed(2),
      balance: this.balance
    })
    return "New balance: £" + this.balance.toFixed(2)
  }

  withdraw(amount) {
    if (this.#balance - amount < 0) throw new Error('Insufficient funds');

    (this.#balance -= amount).toFixed(2)
    this.transactions.push({
      date: this.#simplifiedDate(),
      type: 'debit',
      amount: amount.toFixed(2),
      balance: this.balance
    })

    return "New balance: £" + this.balance.toFixed(2)
  }
  
  #printAllTransactions() {
    let str = 'date || credit || debit || balance'
    for(let i = this.transactions.length - 1; i >= 0; i--) {
      if(this.transactions[i].type === 'credit') {
        str += '\n' + this.transactions[i].date + ' || ' + this.transactions[i].amount + ' || || ' + this.transactions[i].balance.toFixed(2)
      } else {
        str += '\n' + this.transactions[i].date + ' || || ' + this.transactions[i].amount + ' || ' + this.transactions[i].balance.toFixed(2)
      } 
    } return str
  }

  get printStatement() {
    return this.#printAllTransactions()
  }

  #simplifiedDate() {
    let date = new Date()
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  }
}


module.exports = Account