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
> 
```

## How to run tests

In the command line, run:
```
npm run test
```

You should see 100% of tests passed with 100% coverage.

## User Stories
```
As a bank user
So I can keep money in my bank
I'd like to be able to deposit money into my account
```
```
As a bank user
So I can take my money out of my account
I'd like to be able to make withdrawals from my account
```
```
As a bank user
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

