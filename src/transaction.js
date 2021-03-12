const FindDate = require('./findDate')

class Transaction {
  constructor(type, amount, balance, date = this.#findDate()) {
    this.date = date
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