import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableComponent from './../table';
import VariablesComponent from './../variables';

import { getVariablesArray } from './../../func/functions';
import { initVariatablesAction, changeVariableAction } from './../../redux/actions/variable.array.actions';

import '../styles.scss';

class ExportComponent extends Component {

  componentDidMount () {
    this.props.initVariableArray(getVariablesArray(this.props.selectedColors));
  }

  changeVariable = ({target}) => {
    const data = {
      index : target.attributes.getNamedItem('data-index').value,
      variable : target.value
    }    
    this.props.changeVariable(data);   
  }

  render () {
    
    return (
      <div className = 'export-container'>
        <h1>Customize and Export colors for Sass, Less or Stylus</h1>
        <TableComponent onCgangeVar = {this.changeVariable}/>        
        <VariablesComponent variableArray = {this.props.variableArray}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedColors : store.selectedColors,
    variableArray : store.variableArray
  }
}

const mapDispatchToProps = dispatch => ({
  initVariableArray : array => {
    dispatch(initVariatablesAction(array))
  },
  changeVariable : data => {
    dispatch(changeVariableAction(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportComponent);
