class Account {
  constructor(){
    this.balance = 0
  }

  deposit(amount) {
    return "New balance: £" + amount.toFixed(2)
  }
}


module.exports = Account