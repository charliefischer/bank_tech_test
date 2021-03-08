class Account {
  constructor(){
    this._balance = 0
    this._transactions = []
  }

  get balance() {
    return this._balance
  }

  get transactions() {
    return this._transactions
  }

  deposit(amount) {
    this.transactions.push({
      deposit: amount,
      date: new Date()
    })
    return "New balance: £" + (this._balance += amount).toFixed(2)
  }

  withdraw(amount) {
    if (this._balance - amount < 0) throw new Error('Insufficient funds')
    return "New balance: £" + (this._balance -= amount).toFixed(2)
  }
}


module.exports = Account