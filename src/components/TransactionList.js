import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; // to get the value of state, pass it to useContext

const TransactionList = () => {

  // const context = useContext(GlobalContext);
  // console.log(context); // makes up transactions...
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li className="minus">
            {transaction.text} <span>-${transaction.amount}</span><button className="delete-button">x</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList

// NEED TO ADDRESS THE -$ THAT SHOWS ON EACH TRANSACTION ON THE LIST (also tenary operator for className)