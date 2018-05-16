import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store'
import {web3Provided, updateTxNumber} from './actions/actions.js';
import Web3 from 'web3';

console.log(store.getState())
let web3 = new Web3(Web3.givenProvider);




if (web3 !== undefined) {
store.dispatch(web3Provided(web3))
};


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
