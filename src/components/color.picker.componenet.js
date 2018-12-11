import React, { Component } from 'react';
import 'rc-color-picker/assets/index.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
 


class ColorPickerComponent extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currColor: 'red'
    }
  }
  
  onChange = ({color}) => {
    this.setState({
      currColor: color
    })
  }

  render() {
    return (      
      <ColorPickerPanel 
        enableAlpha={false} 
        color={this.state.currColor} 
        onChange={this.onChange} 
        mode="RGB" 
      />   
    )
  }
}

export default ColorPickerComponent;
