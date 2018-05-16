import React from 'react';





import styles  from './modal.css';



class Modal extends React.Component {
constructor(props){
  super(props);



  this.clickHandler = this.clickHandler.bind(this)

}

clickHandler() {

}

render() {

  return(
    <div>




<div id="myModal" className="modal" >


  <a href = 'https://metamask.io/' className="modal-content">
    <span className="close">&times;</span>
    <p>Install MetaMask to Continue</p>
  </a>

</div>
</div>
// Get the modal





)}
}

export default Modal
