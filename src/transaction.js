const FindDate = require('./findDate')

class Transaction {
  constructor(type, amount, balance) {
    this.date = this.#findDate()
    this.type = type
    this.amount = amount
    this.balance = balance
  }

  #findDate(){
    let date = new FindDate()
    return date.format()
  }
}

module.exports = Transaction