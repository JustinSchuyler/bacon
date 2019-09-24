import { DEPOSIT_CATEGORY, EXPENSE_CATEGORY, TRANSACTION_TYPE } from '../constants/Constants'
import { ITransaction } from '../models/interfaces/ITransaction'

const TRANSACTIONS: Array<ITransaction> = [
    {
        id: 1,
        account: "Checkings",
        date: "9/1/2019",
        //category: EXPENSE_CATEGORY.Groceries,
        amount: 164.74,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        id: 2,
        account: "Checkings",
        date: "9/17/2019",
        //category: EXPENSE_CATEGORY.CarInsurance,
        amount: 157.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        id: 3,
        account: "Checkings",
        date: "9/1/2019",
        //category: EXPENSE_CATEGORY.StudentLoans,
        amount: 500.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        id: 4,
        account: "Checkings",
        date: "9/1/2019",
        //category: DEPOSIT_CATEGORY.Wages,
        amount: 500.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        id: 5,
        account: "Savings",
        date: "9/1/2019",
        //category: EXPENSE_CATEGORY.Entertainment,
        amount: 100.00,
        transactionType: TRANSACTION_TYPE.Expense
    },   
]
