import React, { Component } from 'react';
import { connect } from 'react-redux';

import SchemeComponent from './../scheme';
import SelectedColors from './../slected.colors';

import selectSchemeItemAction from './../../redux/actions/schemes.array.actions';

import '../styles.scss';

class PresetsComponent extends Component {

  render () { 
    
    return (
      <div className = 'presets-container'>
      <h1>Explore ready to use colours schemes</h1>
      <SelectedColors />
      {this.props.schemesArray.map((item, index) => (
        <SchemeComponent 
          {...item}
          key = {index}
          dispatch = {this.props.selectSchemeItem}
        />
      ))}


      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    schemesArray : store.schemesArray
  }
}

const mapDispatchToProps = dispatch => ({
  selectSchemeItem : scheme => {
    dispatch(selectSchemeItemAction(scheme))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PresetsComponent);
