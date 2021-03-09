# Bank Tech Test

## Specification
### Requirements
- You should be able to interact witih your code via the JS concole
- Deposits
- Withdrawals
- Account statement (data, amount, balance) printing
- Data is stored in memory (not in a database)

## How to run 

First, clone this repo. Then:
```
> npm install
> node
> require('./src/account)
=> user now sees further instructions of how to interact with the app
```

## How to run tests

In the command line, run:
```
npm run test
```

You should see 100% of tests passed with 100% coverage.

## User Stories
```
As a customer
So I can save money in my bank
I'd like to be able to deposit money into my account
```
```
As a customer
So I can take my money out of my account
I'd like to be able to make withdrawals from my account
```
```
As a customer
So I can keep track of my money in my account
I'd like to be able to view a statement that shows the deposits, withdrawals, the dates of them and the balance
```

## Acceptance Criteria
*Given* a client makes a deposit of 1000 on 10-01-2012
*And* a deposit of 2000 on 13-01-2012
*And* a withdrawal of 500 on 14-01-2012
*When* she prints her bank statement
*Then* she would see
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Planning
### Date
Date should be shown as the acceptance criteria above.
So today the date is 8th March 2021 and so should be shown as
```8/3/2021```

### Amount
The amount deposited or withdrawn should be specified with 2 decimal places and saved as a type and amount to make printing the statements easier down the line
```type: 'debit', amount: 6000```

### Transactions
Transactions should produce a hash that contains the information about:
- the date
- whether it is credit or debit
- the amount
- the balance at the time

e.g 
```
account.deposit(500)
account.transactions
=> [{date: 01/01/2000, type: credit, amount: 500, balance: 500}]
```
This will make it easier down the line to pull out the information for the statement

### User Interface
The app is only designed to be used in the terminal or console.log so I'd like to add a way of hinting to users what to input so they know how to use the banking app
```
Welcome to your account.
To deposit money => myAccount.deposit(enter the amount here)
To withdraw money => myAccount.deposit(enter the amount here)
To view your statement => myAccount.printStatement
To exit => cmd + c
```

### Unhappy Paths
- user could enter not an integer into withdraw and deposit
```
myAccount.deposit('ten')
```
- user could enter a negative integer
```
myAccount.deposit(-10)
```

## What could be improved
Next steps:
- giving this a GUI would stop any chances of the unhappy paths as if I only gave users buttons to press then they couldn't input anything that would crash the app
