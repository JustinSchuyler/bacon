import { DEPOSIT_CATEGORY, EXPENSE_CATEGORY, TRANSACTION_TYPE } from '../../constants/Constants'

export interface ITransaction {
    account: string,
    date: string,
    amount: number,
    category: DEPOSIT_CATEGORY | EXPENSE_CATEGORY,
    transactionType: TRANSACTION_TYPE
}