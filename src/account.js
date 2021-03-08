class Account {
  constructor(){
    this._balance = 0
  }

  balance() {
    return this._balance
  }

  deposit(amount) {
    return "New balance: £" + (this._balance += amount).toFixed(2)
  }

  withdraw(amount) {
    if (this._balance - amount < 0) throw new Error('Insufficient funds')
    return "New balance: £" + (this._balance -= amount).toFixed(2)
  }
}


module.exports = Account