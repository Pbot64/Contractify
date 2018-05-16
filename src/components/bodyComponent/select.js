import React from 'react';
import {NavLink} from 'react-router-dom';
import img from './images/chip2.svg';
import img_2 from './images/airdrop.svg';




import './select.css'




const Select = () => {

      return (
      <div className = 'content'>

    <div className ='container_buttons'>
          <div className ='container_row1'>
                <NavLink to="/tokencreation" className="btn">




<div className = 'img_1_container'>

    <img className ='img_1' src = {img} alt = 'token' />

          <h3><strong>Make a Token </strong></h3>

            <p>
             Release a new fully-customizable token on the Ethereum blockchain.
 </p>

</div>

                 </NavLink>




            <button type= 'button' className = 'btn'>

          Have a Crowdsale
          </button>

            <button type= 'button' className = 'btn'>

         <img className ='img_2' src = {img_2} alt = 'token' />
          <h3><strong> Schedule an Airdrop </strong></h3>
          </button>
           </div>
      <div className ='container_row2'>

          <NavLink to="/tokencreation" className="btn">


          <h3><strong> Issue a Loan </strong></h3>
          <p>
              Do you know someone whose in need of your money. Provide a loan to friends or family with legally recognized terms
 </p>

           </NavLink>
            <button type= 'button' className = 'btn'>

          Form a Trust
          </button>
            <button type= 'button' className = 'btn'>

          Register a Trademark
          </button>
          </div>
    </div>
          </div>)

  };

export default Select;
