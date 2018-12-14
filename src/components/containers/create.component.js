import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorPickerComponent from '../color.picker';
import SelectedColors from '../slected.colors';
import DarkerAndLighterComponent from '../darker.lighter';
import MixedComponent from './../mixed';

import '../styles.scss';

class CreateComponent extends Component {

  render () {
    
    return (
      <div 
        className = 'create-container'
        style = {{backgroundColor : `${this.props.mainColor.color}`}}
      >
        <h1 style = {this.props.mainColor.isLight ? {color : '#000'} : {color : '#fff'}}>
          Choose your color
        </h1>
        <ColorPickerComponent hidden = {false} />
        <SelectedColors />
        <DarkerAndLighterComponent />
        <MixedComponent />
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
