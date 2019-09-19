import React from 'react'

import { ITransactionTable } from '../../models/interfaces/ITransactionTable'
import { TransactionRow } from './TransactionRow'
import { ITransaction } from '../../models/interfaces/ITransaction'

export const TransactionTable = (props: ITransactionTable): JSX.Element => {
    const rows = props.transactions.map(transaction => {
        return (
            <TransactionRow
                account={transaction.account}
                date={transaction.date}
                category={transaction.category}
                amount={transaction.amount}
                transactionType={transaction.transactionType}
            />
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}