import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  // each transaction is an object made up of id, text and amount
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // two decimals

  return (
    // Temp styling for 'align-center'
    <div className="align-center">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balance;


/*
Steps...
- import the GlobalContext and useContext
- define useContext and the inital state value is(useContext(GlobalContext))
  \-> GlobalContext = createContext(initialState) (inital state is a transaction object)

*/