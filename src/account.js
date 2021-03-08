class Account {
  constructor(){
    this._balance = 0
    this._transactions = []
  }

  simplifiedDate() {
    let date = new Date()
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
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
      date: this.simplifiedDate(),
      type: 'credit',
      amount: amount,
      balance: this.balance
    })
    return "New balance: £" + this.balance.toFixed(2)
  }

  withdraw(amount) {
    if (this._balance - amount < 0) throw new Error('Insufficient funds');

    (this._balance -= amount).toFixed(2)

    this.transactions.push({
      date: this.simplifiedDate(),
      type: 'debit',
      amount: amount,
      balance: this.balance
    })

    return "New balance: £" + this.balance.toFixed(2)
  }
}


module.exports = Account