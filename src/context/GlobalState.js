import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create context             
export const GlobalContext = createContext(initialState);   // (will pass it to useContext)

// Create PROVIDER (since it will wrap other components, they will be considered 'children')
// Provider will provide the (initial) state, actions, etc to the components wrapped around it
export const GlobalProivder = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // ACTIONS that will make calls to the reducer (for deleting transactions, etc.)
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  // ADD/CREATING a new transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  // To access the actions, be sure to pass it to the Provider.
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}



/*
For Adding Transaction:
1. Create/Add function that will serve as the action
  -> function addTransaction(transaction) {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
      });
    }
2. Pass it to the provider to use it
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
3. Inside AppReducer, add a new case: "ADD_TRANSACTION"


*/