import React from 'react';

import './styles.scss';

const ExampleComponent = ({color, selected, dispatch}) => (
      <div 
        className = {selected ? 'example-container selected' : 'example-container'}
        onClick = {() => dispatch(color)}
      >
        <div 
          className = 'example'
          style = {{backgroundColor : `${color}`}}
        >
        </div>
          <span className = 'color-hex'>{color}</span>
      </div>
    );

export default ExampleComponent;
