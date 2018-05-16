import React from 'react';
import Web3 from 'web3';

import styles  from './submitted.css';




export const Submitted = (props) => {
//let success = this.state.newContractInstance !== undefined ? <a className = "return_message" href= {'https://rinkeby.etherscan.io/tx/' + props.txNumber} >Your Contract can Be Viewed Here</a> : null
return(
    <div>
      <h1>{props.txNumber}</h1>
        <p className ='confirmation'>Please Confirm Contract on MetaMask</p>


</div>
  )


}
