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
    (this._balance += amount).toFixed(2)
    this.transactions.push({
      date: new Date(),
      type: 'credit',
      amount: amount,
      balance: this.balance
    })
    return "New balance: £" + this.balance.toFixed(2)
  }

  withdraw(amount) {
    if (this._balance - amount < 0) throw new Error('Insufficient funds')
    return "New balance: £" + (this._balance -= amount).toFixed(2)
  }
}


module.exports = Account