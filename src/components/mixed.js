import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorPickerComponent from './color.picker';
import { changeBgMixedAction } from './../redux/actions/change.background.actions';
import { selectAllMixedAction, selectMixedAction, removeAllmixedAction } from './../redux/actions/mixed.actions';
import { isVisibleRemoveBtn } from '../func/functions';

import './styles.scss';

class MixedComponent extends Component {
 
  render () {

    return (
      <div className = 'mixed-container'>
        <div className = 'mixed-title-container'>
          <h2 className = 'mixed-title'>Mixed with</h2>
          <ColorPickerComponent hidden = {true} /> 
        </div>              
        <ul 
          className = 'mixed-list'
          style = {this.props.isDarkBg.isDarkBgMixed ? {backgroundColor : '#000'} : null}
        >
        {this.props.mixedArray.map((item, index) => (
          <li  
            key = {index}          
            style = {{backgroundColor : `${item.color}`}}
            className = {item.selected ? 'selected' : ''}
            onClick = {()=>this.props.selectColor(item.color)}
          >
            <i className = 'fas fa-times'></i>
          </li>
        ))}                    
        </ul>
        <div className = 'btns-container'>
          <button 
            className = 'btn'
            onClick = {this.props.changeBg}
          >
            Dark background
          </button>
          <button 
            className = 'btn'
            onClick = {() => this.props.selectAllColors(this.props.mixedArray)}
          >
            Select all
          </button>
          <button 
            className = {isVisibleRemoveBtn(this.props.mixedArray) ? 'btn danger' : 'btn danger hidden'}
            onClick = {() => this.props.removeAllColors(this.props.mixedArray)}
          >
            Remove all
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    mixedArray : store.mixedArray,
    isDarkBg : store.isDarkBg
  }
}

const mapDispatchToProps = dispatch => ({ 
  selectColor : color => {
    dispatch(selectMixedAction(color));
  },
  selectAllColors : array => {
    dispatch(selectAllMixedAction(array));    
  },
  removeAllColors : () => {
    dispatch(removeAllmixedAction());    
  },
  changeBg : () => {
    dispatch(changeBgMixedAction());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MixedComponent);
