import React, { Component } from 'react';

import HeaderComponent from './header.component';
import CreateComponent from './create.component';
import FooterComponent from './footer.component';

import '../styles.scss';

class AppComponent extends Component {

  render () {
    
    return (
      <div className = 'app-container'>
        <HeaderComponent />
        <CreateComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default AppComponent;
