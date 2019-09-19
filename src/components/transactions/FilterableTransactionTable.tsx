import React from 'react'
import { FilterBar } from './FilterBar'
//import { IFilterableTransactionTable } from '../../models/interfaces/IFilterableTransactionTable'
import { TransactionTable } from './TransactionTable'
import { ITransactionTable } from '../../models/interfaces/ITransactionTable'
import { IFilterableTransactionTable } from '../../models/interfaces/IFilterableTransactionTable'

export const FilterableTransactionTable = (props: IFilterableTransactionTable): JSX.Element => {
    return (
        <div>
            <FilterBar />
            <TransactionTable
            transactions={props.transactionTable.transactions}
            />
        </div>
    );
}