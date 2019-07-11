import React, { Component } from 'react';
import './Nav.css';
import Information from './Information/Information';
import Network from './Network/Network'
import Portfolio from './Portfolio/Portfolio'

class Nav extends Component {
  render(){
    return(
      <div className="Nav">
        <Information/>
        <Portfolio/>
        <Network/>
      </div>
    )
  }
}

export default Nav;
