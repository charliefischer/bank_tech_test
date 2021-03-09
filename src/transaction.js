class Transaction {
  constructor(type, amount, balance, date){
    this.date = date
    this.type = type 
    this.amount = amount 
    this.balance = balance
  }
}

module.exports = Transaction