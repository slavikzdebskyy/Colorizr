import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import ColorPicker from 'rc-color-picker';

import changeMainColorAction from '../redux/actions/change.main.color.action';
import changeMixedColorAction from './../redux/actions/change.mixed.color.action';
import { changeDarkLightAction } from '../redux/actions/darker.actions';
import { changeMixedArrayAction } from './../redux/actions/mixed.actions';

import { getDarkerArray, getMixedArray } from '../func/functions';

import 'rc-color-picker/assets/index.css';

class ColorPickerComponent extends Component {

  changeMixedColor = ({color}) => {
    this.props.changeMixedColor(this.props.mainColor, color);
  }

  changeMainColor = ({color}) => {
    this.props.changeMainColor(color, this.props.mixedColor);
  }
  
  render () {
    
    return ( 
      <div>
        {this.props.hidden ?           
          <ColorPicker
            enableAlpha = {false}
            animation = "slide-up"
            color = {this.props.mixedColor}
            onChange = {this.changeMixedColor}
          /> 
          : 
          <ColorPickerPanel 
            enableAlpha = {false} 
            color = {this.props.mainColor} 
            onChange = {this.changeMainColor} 
            mode = "RGB" 
          />
        } 
      </div>
          
        
    )
  }
}

const mapStateToProps = store => {
  return {
    mainColor : store.mainColor.color,
    mixedColor : store.mixedColor 
  }
}

const mapDispatchToProps = dispatch => ({ 
  changeMainColor: (mainColor, mixedColor) => {
    dispatch(changeMainColorAction(mainColor));
    dispatch(changeDarkLightAction(getDarkerArray(mainColor)));
    dispatch(changeMixedArrayAction(getMixedArray(mainColor, mixedColor)));
  },
  changeMixedColor: (mainColor, mixedColor) => {
    dispatch(changeMixedColorAction(mixedColor));
    dispatch(changeMixedArrayAction(getMixedArray(mainColor, mixedColor)));
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerComponent);


