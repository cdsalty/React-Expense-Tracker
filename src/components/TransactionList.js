import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState'; // to get the value of state, pass it to useContext


const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context); // makes up transactions...
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList

// NEED TO ADDRESS THE -$ THAT SHOWS ON EACH TRANSACTION ON THE LIST (also tenary operator for className)
// " <Transaction transaction={transaction} /> " is referred to as a list and therefore must have a unique key