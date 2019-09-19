import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FilterableTransactionTable } from './components/transactions/FilterableTransactionTable'
import { FILTERABLE_TRANSACTION_TABLE } from './data/TransactionStore'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <FilterableTransactionTable 
          transactionTable={FILTERABLE_TRANSACTION_TABLE.transactionTable}
        />
      </div>
    </div>
  );
}

export default App;
