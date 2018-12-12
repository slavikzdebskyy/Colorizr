import React, { Component } from 'react';
import { connect } from 'react-redux';

import selectDarkLightAction from './../redux/actions/select.dark.light.action';
import addSelectedColor from './../redux/actions/add.selected.color.action';

import './styles.scss';

class DarkerAndLighter extends Component {
 
  render () {
    return (
      <div className = 'darker-and-lighter-container'>
        <h2>Darker and Lighter</h2>        
        <ul className = 'darker-and-lighter-list'>
        {this.props.darkAndLight.map((item, index) => (
          <li  
            key = {index}          
            style = {{backgroundColor : `${item.color}`}}
            className = {item.selected ? 'selected' : ''}
            onClick = {()=>this.props.selectColor(index, item.color)}
          >
            <i className = 'fas fa-times'></i>
          </li>
        ))}                    
        </ul>
        <div className = 'btns-container'>
          <button className = 'btn'>Dark background</button>
          <button className = 'btn'>Select all</button>
          <button className = 'btn danger'>Remove all</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    darkAndLight: store.darkAndLight 
  }
}

const mapDispatchToProps = dispatch => ({ 
  selectColor: (index, color) => {
    dispatch(selectDarkLightAction(index));
    dispatch(addSelectedColor(color));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter);
