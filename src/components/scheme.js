import React from 'react';

import './styles.scss';

const SchemeComponent = props => { 
  return (
      <div 
        className = 'scheme-container'
        onClick = {() => props.dispatch(props)}
      >
        <h2 className = 'scheme-title'>
          {props.name}
          <span className = {props.selected ? 'checked selected' : 'checked'}>
            <i className = 'fas fa-check'></i>
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
