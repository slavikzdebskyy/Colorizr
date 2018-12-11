import React, { Component } from 'react';

import ColorPickerComponent from './color.picker.componenet';


import './App.scss';

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create APP !!!</h1>
        <ColorPickerComponent />
      </div>
    );
  }
}

export default AppComponent;
