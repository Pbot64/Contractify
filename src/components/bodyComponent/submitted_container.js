import React from 'react';
import {connect} from 'react-redux';
import {Submitted} from './submitted';

import styles  from './submitted.css';


class Submit_container extends React.Component {

render() {
return (
  <div>
    <Submitted txNumber= {this.props.txNumber} />
</div>

)
}
}

const mapStateToProps = (state) => {
  return {
    txNumber: state.contract.txNumber,

  };

}

const mapDispatchToProps = (Dispatch) => {
  return {

  }
}




export default connect(mapStateToProps)(Submit_container);
