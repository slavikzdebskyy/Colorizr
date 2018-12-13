import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectedColors from '../slected.colors';
import ExampleComponent from './../example';

import { selectFlatItemAction, selectMaterialItemAction } from './../../redux/actions/flat.material.actions';

import '../styles.scss';

class ExploreComponent extends Component {
  
  render () {
    
    return (
      <div className = 'explore-container'>
      <h1>Explore presets</h1>
      <SelectedColors />
      <h2>Flat</h2>
      <div className = 'collection-container'>
        {this.props.flat.map((item, index) => (
          <ExampleComponent 
            color = {item.color} 
            selected = {item.selected} 
            key = {index}
            dispatch = {this.props.selectFlatItem}
          />
        ))}
      </div>
      <h2>Material</h2>
      <div className = 'collection-container'>
        {this.props.material.map((item, index) => (
          <ExampleComponent 
            color = {item.color} 
            selected = {item.selected} 
            key = {index}
            dispatch = {this.props.selectMaterialItem}
          />
        ))}
      </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    flat : store.flatArray,
    material : store.materialArray
  }
}

const mapDispatchToProps = dispatch => ({
  selectFlatItem : color => {
    dispatch(selectFlatItemAction(color));
  },
  selectMaterialItem : color => {
    dispatch(selectMaterialItemAction(color));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExploreComponent);
