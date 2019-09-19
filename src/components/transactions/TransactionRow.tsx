import React from 'react'
import { ITransaction } from '../../models/interfaces/ITransaction'
import { DEPOSIT_CATEGORY, EXPENSE_CATEGORY } from '../../constants/Constants'

export const TransactionRow = (props: ITransaction): JSX.Element => {
    return (
        <tr>
            <td>{props.account}</td>
            <td>{props.date}</td>
            <td>{mapTransactionCategoryToString(props.category)}</td>
            <td>{props.amount}</td>
            <td>{props.transactionType}</td>
        </tr>
    );
}

function mapTransactionCategoryToString(type: EXPENSE_CATEGORY | DEPOSIT_CATEGORY): string {
    switch(type) {
        case EXPENSE_CATEGORY.Groceries:
            return 'Groceries'
        case EXPENSE_CATEGORY.CarInsurance:
            return 'Car Insurance'
        case EXPENSE_CATEGORY.Entertainment:
            return 'Entertainment'
        case EXPENSE_CATEGORY.Rent:
            return 'Rent'
        case EXPENSE_CATEGORY.StudentLoans:
            return 'Student Loans'
        case DEPOSIT_CATEGORY.Wages:
            return 'Wages'
        default:
            return 'Misc.'
    }
}