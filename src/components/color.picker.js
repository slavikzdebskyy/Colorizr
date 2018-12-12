import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel as ColorPickerPanel } from 'rc-color-picker';

import changeMainColorAction from '../redux/actions/change.main.color.action';
import { changeDarkLightAction } from '../redux/actions/dark.light.actions';

import { getDarkenArray } from '../func/functions';

import 'rc-color-picker/assets/index.css';
 


class ColorPickerComponent extends Component {
  
  render () {
    return ( 
      <div>
        {this.props.hidden ?
          <ColorPickerPanel 
            enableAlpha = {false} 
            color = {this.props.mainColor} 
            onChange = {this.props.changeMainColor} 
            mode = "RGB" 
          /> : null} 

      </div>
          
        
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


