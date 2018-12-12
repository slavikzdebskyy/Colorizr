import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorPickerComponent from '../color.picker';
import SelectedColors from '../slected.colors';
import DarkerAndLighter from '../darker.lighter';

import '../styles.scss';

class CreateComponent extends Component {

  render () {
    return (
      <div 
        className = 'create-container'
        style = {{backgroundColor : `${this.props.mainColor}`}}
      >
        <h1 className = 'title'>Choose your color</h1>
        <ColorPickerComponent hidden = {true} />
        <SelectedColors />
        <DarkerAndLighter />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    mainColor: store.mainColor  
  }
}

export default connect(mapStateToProps)(CreateComponent);
