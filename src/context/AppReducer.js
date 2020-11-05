// How we specify the applications state changes in response to certain actions to the store/context. 
// type will work like an id 
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // give me all transactions that don't match this specific payload/id
      }
    default:
      return state;
  }
}



