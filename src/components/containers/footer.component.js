import React, { Component } from 'react';

import logo from './../../assets/logo-light.svg';
import '../styles.scss';

class FooterComponent extends Component {

  render () {
    
    return (
      <footer>
        <img 
          className = 'footer-img'
          src = {logo} 
          alt = 'logo'
        />
        <h3>Build with React, Redux, React Router</h3>
      </footer>
    );
  }
}

export default FooterComponent;
