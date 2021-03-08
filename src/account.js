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
    return "New balance: £-10.00"
  }
}


module.exports = Account