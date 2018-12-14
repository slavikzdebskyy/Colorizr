import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
library.add(faCheck)

const SchemeComponent = props => { 
  return (
      <div 
        className = 'scheme-container'
        onClick = {() => props.dispatch(props)}
      >
        <h2 className = 'scheme-title'>
          {props.name}
          <span className = {props.selected ? 'checked selected' : 'checked'}>
            <FontAwesomeIcon icon = 'check' />            
          </span>        
        </h2>
        <div className = 'scheme'>
        {props.colors.map((item, index) => (
          <div
          style = {{backgroundColor : `${item}`}}
          className = 'scheme-color-item'
          key = {index}
          >
          </div>
        ))}
        </div>          
      </div>
    )};

export default SchemeComponent;
