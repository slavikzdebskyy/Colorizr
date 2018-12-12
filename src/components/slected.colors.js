import React, { Component } from 'react';
import { connect } from 'react-redux';

import removeSelectedColor from './../redux/actions/remove.selected.color.action';

import './styles.scss';

class SelectedColors extends Component {

  getEmptyElements = countOfElements => {
    const emptyElements = [];
    for(let i = 0; i < countOfElements; i++) {
      emptyElements.push(<li><i className = 'fas fa-times'></i></li>);
    }
    return emptyElements;
  }

  render () {
    
    return (
      <div className = 'selected-colors-container'>
        <h2>Select up to ten colors</h2>
        <p>Select Colors by clicking on them</p>
        <ul className = 'slected-list'>
        {this.props.selectedColors.map((item, index) => (
          <li 
            key = {index}
            style = {{backgroundColor : `${item}`}}
            onClick = {() => this.props.removeColor(item)}
          >
            <i className = 'fas fa-times'></i>
          </li>
        ))}        
        {this.getEmptyElements(10 - this.props.selectedColors.length)}          
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedColors : store.selectedColors
  }
}

const mapDispatchToProps = dispatch => ({
  removeColor : color => {
    dispatch(removeSelectedColor(color));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedColors);
