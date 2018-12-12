import React, { Component } from 'react';

import './styles.scss';

class SelectedColors extends Component {

  render () {
    return (
      <div className = 'selected-colors-container'>
        <h2>Select up to ten colors</h2>
        <p>Select Colors by clicking on them</p>
        <ul className = 'slected-list'>
          <li>
            <i className = 'fas fa-times'></i>
          </li>
          <li>
            <i className = 'fas fa-times'></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default SelectedColors;
