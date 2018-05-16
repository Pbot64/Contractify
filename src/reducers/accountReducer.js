const initialState = {
  txNumber: undefined,
  web3: undefined,
  address: undefined,
  balance: undefined
};


 const contractReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'UPDATE_TX_NUMBER':
          state = {
            ...state,
            txNumber: action.tx

          };
          break;
    case 'WEB3_PROVIDED':
    state = {
      ...state,
      web3: action.payload
    };
    break;
    case 'UPDATE_ADDRESS':
    state = {
      ...state,
      address: action.address
    }
    break;
    case 'UPDATE_BALANCE':
    state = {
      ...state,
      balance: action.balance
    }
    break;


   }
     return state;

 }
      export default contractReducer
