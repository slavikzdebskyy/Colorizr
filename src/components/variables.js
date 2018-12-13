import React, { Component } from 'react';

import './styles.scss';

class VariablesComponent extends Component { 

  constructor (props) {
    super (props)
    this.state = {
      sass : true,
      less : false,
      stylus : false
    }
  }
  activateItem = itemName => {
    for(let key in this.state) {
      this.setState({[key] : key === itemName})
    };
    this.setState({active : itemName})
  }
  
  render () {
    return (
      <div className = 'variables-container'>
        <h2 className = 'export-title'>Export your code</h2>
        <ul className = 'nav variable'>
          <li
          onClick = {() => this.activateItem('sass')}
          className = {this.state.sass ? 'active' : ''}
          >
            Sass
          </li>
          <li 
            onClick = {() => this.activateItem('less')}
            className = {this.state.less ? 'active' : ''}
          >
            Less
          </li>
          <li
          onClick = {() => this.activateItem('stylus')}
          className = {this.state.stylus ? 'active' : ''}
          >
            Stylus
          </li>          
        </ul>
        <pre>
          {this.props.variableArray.map((item, index) => (
            <code key = {index}>
              {this.state.sass ? 
              <span>
                {`$${item.variableName}: ${item.color};`}
              </span>
              : null}
              {this.state.less ? 
              <span>
                {`@${item.variableName}: ${item.color};`}
              </span>
              : null}
              {this.state.stylus ? 
              <span>
                {`${item.variableName} = ${item.color}`}
              </span>
              : null}
              <br/>
            </code>
          ))}
        </pre>      
      </div>
    )
  }
};

export default VariablesComponent;
