import React, { Component } from 'react';
import 'rc-color-picker/assets/index.css';
import { connect } from 'react-redux';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import changeMainColorAction from '../redux/actions/change.main.color.action';
 


class ColorPickerComponent extends Component {
  
  render () {
    return (      
      <ColorPickerPanel 
        enableAlpha={false} 
        color={this.props.mainColor} 
        onChange={this.props.changeMainColor} 
        mode="RGB" 
      />   
    )
  }
}

const mapStateToProps = state => {
  return {
    mainColor: state.mainColor  
  }
}

const mapDispatchToProps = dispatch => ({ 
  changeMainColor: color => {
    dispatch(changeMainColorAction(color))
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerComponent);


