import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class Header extends Component {
  render() {
      return (
      <header className = "header">
           <NavLink to = "/contracts">
          Contractify
          </NavLink>
          </header>
    );
  }
}

export default Header;
