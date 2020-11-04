import React from 'react'

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-button">x</button>
    </li>
  );
}

export default Transaction;




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