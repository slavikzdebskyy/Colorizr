import React, { Component } from 'react';
import 'rc-color-picker/assets/index.css';
import { connect } from 'react-redux';
import { Panel as ColorPickerPanel } from 'rc-color-picker';

import changeMainColorAction from '../redux/actions/change.main.color.action';
import changeDarkLightAction from './../redux/actions/change.dark.light.action';

import getDarkenArray from './../func/get.darken.array';
 


class ColorPickerComponent extends Component {
  
  render () {
    return (      
      <ColorPickerPanel 
        enableAlpha = {false} 
        color = {this.props.mainColor} 
        onChange = {this.props.changeMainColor} 
        mode = "RGB" 
      />   
    )
  }
}

const mapStateToProps = store => {
  return {
    mainColor: store.mainColor  
  }
}

const mapDispatchToProps = dispatch => ({ 
  changeMainColor: color => {
    dispatch(changeMainColorAction(color));
    dispatch(changeDarkLightAction(getDarkenArray(color.color)));
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerComponent);


