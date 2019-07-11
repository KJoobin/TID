import React, { Component } from 'react';
import './Header.css';
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

class Header extends Component {
  render(){
    return(
      <div className="Header">
        <Logo/>
        <Nav/>
      </div>
    )
  }
}

export default Header;
