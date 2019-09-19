import { DEPOSIT_CATEGORY, EXPENSE_CATEGORY, TRANSACTION_TYPE } from '../constants/Constants'
import { ITransaction } from '../models/interfaces/ITransaction'
import { ITransactionTable} from '../models/interfaces/ITransactionTable'
import { IFilterableTransactionTable } from '../models/interfaces/IFilterableTransactionTable'

const TRANSACTIONS: Array<ITransaction> = [
    {
        account: "Checkings",
        date: "9/1/2019",
        category: EXPENSE_CATEGORY.Groceries,
        amount: 164.74,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        account: "Checkings",
        date: "9/17/2019",
        category: EXPENSE_CATEGORY.CarInsurance,
        amount: 157.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        account: "Checkings",
        date: "9/1/2019",
        category: EXPENSE_CATEGORY.StudentLoans,
        amount: 500.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        account: "Checkings",
        date: "9/1/2019",
        category: DEPOSIT_CATEGORY.Wages,
        amount: 500.00,
        transactionType: TRANSACTION_TYPE.Expense
    },
    {
        account: "Savings",
        date: "9/1/2019",
        category: EXPENSE_CATEGORY.Entertainment,
        amount: 100.00,
        transactionType: TRANSACTION_TYPE.Expense
    },   
]

const TRANSACTION_TABLE: ITransactionTable = {
    transactions: TRANSACTIONS
}

export const FILTERABLE_TRANSACTION_TABLE: IFilterableTransactionTable = {
    transactionTable: TRANSACTION_TABLE
}