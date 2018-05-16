import React from 'react';
import {connect} from 'react-redux';
import Contents from './contents.js';




class ContentsContainer extends React.Component {
  render(){
    return(
      <div>
      <Contents address = {this.props.address} />
      </div>
    )
  }
}





const mapStateToProps = (state) => {
  return {

    address: state.contract.address,
     balance: state.contract.balance

  };

}

const mapDispatchToProps = (Dispatch) => {
  return {

  }
}




export default connect(mapStateToProps)(ContentsContainer);
