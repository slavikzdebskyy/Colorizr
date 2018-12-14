import React, { Component } from 'react';
import { connect } from 'react-redux';
import Color from 'color';

import './styles.scss';

class TableComponent extends Component {
  
  render () { 
    
    return (
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Hex value</th>
            <th>RGB value</th>
            <th>Variable name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.selectedColors.map((item, index) => (
            <tr key = {index}>
              <td style = {{backgroundColor : `${item}`}}></td>
              <td>{item}</td>
              <td>{Color(item).string()}</td>
              <td>
                <input
                className = 'variable-input'
                type =' text' 
                data-index = {index}         
                defaultValue = {`color-${index + 1}`}
                onChange = {this.props.onCgangeVar}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedColors : store.selectedColors
  }
}

export default connect(mapStateToProps)(TableComponent);