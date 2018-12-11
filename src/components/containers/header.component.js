import React, { Component } from 'react';

import logo from '../../assets/logo-dark.svg'
import '../styles.scss';

class HeaderComponent extends Component {

  render () {
    return (
      <header className = 'flex-row-space-around-center-wrap'>
        <img 
          className = 'logo-img-svg'
          src = {logo} 
          alt = 'logo'
        />
        <ul className = 'flex-row-space-between-center-wrap nav'>
          <li>Create</li>
          <li>Explore</li>
          <li>Presets</li>
          <li>Export</li>
        </ul>
      </header>
    );
  }
}

export default HeaderComponent;
