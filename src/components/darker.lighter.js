import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { selectDarkLightAction, selectAllDarkLightAction, removeAllDarkLightAction } from '../redux/actions/darker.actions';
import { changeBgDarkLightAction } from './../redux/actions/change.background.actions';
import { isVisibleRemoveBtn } from '../func/functions';

import './styles.scss';
library.add(faTimes)

class DarkerAndLighterComponent extends Component {
 
  render () {

    return (
      <div className = 'darker-container'>
        <h2 className = 'darker-title'>Darker and Lighter</h2>        
        <ul 
          className = 'darker-list'
          style = {this.props.isDarkBg.isDarkBgDarker ? {backgroundColor : '#000'} : null}
        >
        {this.props.darkerArray.map((item, index) => (
          <li  
            key = {index}          
            style = {{backgroundColor : `${item.color}`}}
            className = {item.selected ? 'selected' : ''}
            onClick = {()=>this.props.selectColor(item.color)}
          >
          <FontAwesomeIcon icon = 'times' className = 'fas fa-times' />
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
            onClick = {() => this.props.selectAllColors(this.props.darkerArray)}
          >
            Select all
          </button>
          <button 
            className = {isVisibleRemoveBtn(this.props.darkerArray) ? 'btn danger' : 'btn danger hidden'}
            onClick = {() => this.props.removeAllColors(this.props.darkerArray)}
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
    darkerArray : store.darkerArray,
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

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighterComponent);
