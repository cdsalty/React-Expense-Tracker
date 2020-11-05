// How we specify the applications state changes in response to certain actions to the store/context. 
// type will work like an id 
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // give me all transactions that don't match this specific payload/id
      }
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions] // inside the addTransaction function, the payload is the transaction. The current plus the rest
        // why do we need to return the original value of state if we are taking the original transactions? curious...
      }
    default:
      return state;
  }
}


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
    - adding a transaction needs to return all the transactions that were there plus the new one in the payload
      \--> transactions: [action.payload, ...state.transactions]
      case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions] // inside the addTransaction function, the payload is the transaction. The current plus the rest
      }

*/