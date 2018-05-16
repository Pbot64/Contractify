export const updateTxNumber = (tx) => ({
    type: 'UPDATE_TX_NUMBER',
    tx,
  });

export const web3Provided = (web3) => ({
  type: 'WEB3_PROVIDED',
  web3,
});

export const updateAddress = (address) => ({
  type: 'UPDATE_ADDRESS',
  address
})

export const updateBalance = (balance) => ({
  type: 'UPDATE_BALANCE',
  balance
})
