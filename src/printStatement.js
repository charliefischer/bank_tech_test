class PrintStatement {
  constructor(transactions){
    this.printAllTransactions(transactions)
  }
  printAllTransactions(transactions) {
    this.statement = 'date || credit || debit || balance'
    for (let i = transactions.length - 1; i >= 0; i--) {
      if (transactions[i].type === 'credit') {
        this.statement += '\n' + 
        transactions[i].date + 
        ' || ' + 
        transactions[i].amount.toFixed(2) + 
        ' || || ' + 
        transactions[i].balance.toFixed(2)
      } else {
        this.statement += '\n' + 
        transactions[i].date + 
        ' || || ' + 
        transactions[i].amount.toFixed(2) + 
        ' || ' + 
        transactions[i].balance.toFixed(2)
      }
    }
    return this.statement
  }
}

module.exports = PrintStatement