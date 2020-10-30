import React, { useContext, useReducer } from 'react';
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
export const GlobalContext = createContext(initialState);


// Create PROVIDER (since it will wrap other components, they will be considered 'children')
export const GlobalProivder = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Provider will provide the state, actions, etc to the components wrapped around it
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
}