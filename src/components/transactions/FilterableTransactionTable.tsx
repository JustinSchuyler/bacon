import React from 'react'
import { FilterBar } from './FilterBar'
import { TransactionTable } from './TransactionTable'
import { IFilterableTransactionTable } from '../../models/interfaces/IFilterableTransactionTable'

export const FilterableTransactionTable = (props: IFilterableTransactionTable): JSX.Element => {
    return (
        <div>
            <FilterBar />
            <TransactionTable
            transactions={props.transactions}
            />
        </div>
    );
}