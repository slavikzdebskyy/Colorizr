import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorPickerComponent from '../color.picker.component';

import '../styles.scss';

class CreateComponent extends Component {

  render () {
    return (
      <div 
        className = 'create-container flex-col-justify-start-center'
        style = {{backgroundColor : `${this.props.mainColor}`}}
      >
        <h1 className = 'title'>Choose your color</h1>
        <ColorPickerComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainColor: state.mainColor  
  }
}

export default connect(mapStateToProps)(CreateComponent);
