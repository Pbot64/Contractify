import React from 'react';
import Web3 from 'web3';
import store from '/Users/paulbarber/Desktop/react/my-react-project/src/store.js'
import {updateAddress} from '/Users/paulbarber/Desktop/react/my-react-project/src/actions/actions.js';


import styles  from './accountInfo.css';





let web3 = new Web3(Web3.givenProvider);




class AccountInfo extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    address: undefined,
    balance: null
  };

this.getAccount = this.getAccount.bind(this);
this.getBalance = this.getBalance.bind(this);



}



async getAccount() {
  if (Web3.givenProvider !== null) {
    let account = await web3.eth.getAccounts();
    store.dispatch(updateAddress(account[0]))
    this.props.accountData(this.state.address)


  }
}


async getBalance() {
  await this.getAccount();
  if (this.state.address !== undefined) {
    let balance = await web3.eth.getBalance(this.state.address)
    this.setState ({
      balance: balance.toString(10)*(0.000000000000000001)
    });
  }
}


componentWillMount(){
  this.getBalance();
}

render() {

  return(

<div className = 'accountInfo_container'>
  <p> Address: {this.state.address}</p>
  <p> Balance: {this.state.balance} </p>
</div>

    )
  }
}
export default AccountInfo
