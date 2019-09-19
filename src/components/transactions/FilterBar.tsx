import React from 'react'

export const FilterBar = (): JSX.Element => {
    return (
        <form>
            <input type="text" placeholder="Start Date" />
            <input type = "text" placeholder="End Date" />
            <p>placeholder for transaction type</p>
        </form>
    );
}