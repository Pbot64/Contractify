import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import Web3 from 'web3';
import Modal from './modal';
import * as contractJson from './contract.json';
import {bytecode} from './bytecode.js';
import AccountInfo from './accountInfo';
import Submitted from './submitted';
import {updateTxNumber} from '/Users/paulbarber/Desktop/react/my-react-project/src/actions/actions.js';
import store from '/Users/paulbarber/Desktop/react/my-react-project/src/store.js'


let web3 = new Web3(Web3.givenProvider);
let transactionHash;


class Contents extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        balance: '',
          contract: new web3.eth.Contract(contractJson),
          contractInstance: undefined,
          address: undefined,
          name: '',
          initialSupply: '',
          symbol: '',
          hashedTransaction: undefined
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.accountUpdate = this.accountUpdate.bind(this);


}

accountUpdate(accounts) {
  this.setState({
    address: accounts
  });


}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value

  })
}


handleClick(event) {

    this.state.contract.deploy({
          from: '0xBaCd88012BB16E45361e8e46220964259daBB634',
          data: bytecode,
          arguments: [this.state.initialSupply, this.state.name, this.state.symbol]
                 })
                 .send({
                     from: '0xBaCd88012BB16E45361e8e46220964259daBB634',
                     gas: 1500000,
                     gasPrice: '3000000000'
                 }, (error, transactionHash) => {})
.on('transactionHash', (transactionHash) => {


     transactionHash = 'Your tx: ' + transactionHash

  store.dispatch(updateTxNumber(transactionHash))
  console.log(this.state.hashedTransaction)

})
.on('receipt', function(receipt){
   console.log(receipt.contractAddress) // contains the new contract address
})
                 .then((newContractInstance) => {



                     console.log(newContractInstance.options.address);

                    newContractInstance.methods.name()
                      .call().then(function(result){
                        console.log(result)
                      });

                      newContractInstance.methods.totalSupply()
                        .call().then(function(result){console.log(result)});

                        newContractInstance.methods.symbol()
                          .call().then(function(result){console.log(result)});

                     // instance with the new contract address
                 })



          };





  render() {



      return (
        <div>

    <div>{Web3.givenProvider == null ? <Modal /> : null}</div>
<AccountInfo accountData = {this.accountUpdate} />
  <h1>{this.props.address === undefined ? <h1>Login to Metamask</h1> : null}</h1>

      <div className = 'content'>
          <form className = 'form_1' name= 'form_1' >
        <div className ='form_items' id ='token_name_form'>
        Token Name <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange}  />
            </div>

          <div className ='form_items' id ='token_symbol_form'>
        Token Symbol <input type = "text" name = "symbol" value = {this.state.symbol} onChange = {this.handleChange}  />
              </div>
          <div className ='form_items' id ='initial_supply_form'>
        Initial Supply <input type ='text' name = "initialSupply" value = {this.state.initialSupply} onChange = {this.handleChange} />
      <NavLink to="/submitted">
            <input type="button" value="Submit" onClick= {this.handleClick}/>
            </NavLink>
              </div>



      </form>

          </div>
          </div>
    );
  }
}


export default Contents;
