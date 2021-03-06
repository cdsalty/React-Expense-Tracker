import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  // const sign = transaction.amount < 0 ? '-' : '+';
  const sign = transaction.amount < 0 ? '-' : ''; // no reason for + when it's a positive number

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-button" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

// export default Transaction;




/*
Before for reviewing after...
<li className="minus">{transaction.text}<span>-$400</span><button className="delete-button">x</button>
</li>

To make the number always reflect positive so it doesn't always have a minus sign, do the following:
<span>{sign}${transaction.amount}</span>
CHANGED TO
<span>{sign}${Math.abs(transaction.amount)}</span>
THIS IS BECAUSE THE TRANSACTION AMOUNT BEING ENTERED WAS CARRYING A ' - ' OR A ' + ';
*/