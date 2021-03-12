const Account = require('../src/account')

const account = new Account()
console.log(account.deposit(10));
console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.printStatement);