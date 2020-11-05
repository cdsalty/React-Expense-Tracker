import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);  // CAN"T DO E.TARGET.VALUE!!! FYI
    // create new transaction object to return
    // if target.value = "" {
    //   return {<h2>missing amount</h2>}
    // }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),  // creating random id for sake of time
      text: text,
      amount: +amount  // CONVERTING A STRING VALUE TO A NUMBER VALUE
    }

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter transaction details..."
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount
          <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;



/*
For Adding Transaction:
1. Create/Add function that will serve as the action
  * function addTransaction(transaction) {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction (When adding, we need the entire object)
      });
    }
2. Pass it to the provider to access it inside other components
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
3. Inside AppReducer, add a new case: "ADD_TRANSACTION"
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
**ONCE COMPLETE, MOVE TO ADDTRANSACTION COMPONENT... ***
4. Import useContext and below it, import GlobalContext
    -->  import React, { useState, useContext } from 'react';
    -->  import GlobalContext from '../context/GlobalState';

5. assign addTransaction to a variable; assing it to useContext and assign it to the globalContext
    --> const { addTransaction } = useContext(GlobalContext); // because it was passed in through the gloabl provider

6. on the <form>, we will add an onSubmit listener and assing it to handleSubmit
    --> <form onSubmit = {handleSubmit}>

7. define handleSubmit
    --> prevent form submission, e.preventDefault()
    --> Create a new transaction object to return
        \->

*/