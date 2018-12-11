import React, { Component } from 'react';

import HeaderComponent from './header.component';
import CreateComponent from './create.component';

import '../styles.scss';

class AppComponent extends Component {

  render () {
    return (
      <div className="app-container flex-col-space-between-center">
        <HeaderComponent />
        <CreateComponent />
      </div>
    );
  }
}

export default AppComponent;
