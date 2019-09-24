import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import { FilterableTransactionTable } from './components/transactions/FilterableTransactionTable'
import { IFilterableTransactionTable } from './models/interfaces/IFilterableTransactionTable';

class App extends Component<any, IFilterableTransactionTable>{
  constructor(props: any) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/transactions")
      .then( res => {
        console.log(res.data)
        this.setState({
          transactions: res.data
        })
      })
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <div>
          <FilterableTransactionTable 
            transactions={ this.state.transactions }
          />
        </div>
      </div>
    );
  }
}

export default App;
