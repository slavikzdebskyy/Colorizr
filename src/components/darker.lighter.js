import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDarkLightAction, selectAllDarkLightAction, removeAllDarkLightAction } from './../redux/actions/dark.light.actions';
import { changeBgDarkLightAction } from './../redux/actions/change.background.actions';
import { isVisibleRemoveBtn } from '../func/functions';

import './styles.scss';

class DarkerAndLighter extends Component {
 
  render () {

    return (
      <div className = 'darker-and-lighter-container'>
        <h2 className = 'darker-and-lighter-title'>Darker and Lighter</h2>        
        <ul 
          className = 'darker-and-lighter-list'
          style = {this.props.isDarkBg.isDarkBgDarker ? {backgroundColor : '#000'} : null}
        >
        {this.props.darkAndLight.map((item, index) => (
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
            onClick = {() => this.props.selectAllColors(this.props.darkAndLight)}
          >
            Select all
          </button>
          <button 
            className = {isVisibleRemoveBtn(this.props.darkAndLight) ? 'btn danger' : 'btn danger hidden'}
            onClick = {() => this.props.removeAllColors(this.props.darkAndLight)}
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
    darkAndLight : store.darkAndLight,
    isDarkBg : store.isDarkBg
  }
}

const mapDispatchToProps = dispatch => ({ 
  selectColor : color => {
    dispatch(selectDarkLightAction(color));
  },
  selectAllColors : array => {
    dispatch(selectAllDarkLightAction(array));    
  },
  removeAllColors : () => {
    dispatch(removeAllDarkLightAction());    
  },
  changeBg : () => {
    dispatch(changeBgDarkLightAction());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter);
