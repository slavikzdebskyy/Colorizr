import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo-dark.svg'
import '../styles.scss';

class HeaderComponent extends Component {
  
  render () { console.log('HEADER =>', this.props)
    
    return (
      <header>
        <img 
          className = 'logo-img-svg'
          src = {logo} 
          alt = 'logo'
        />
        <ul className = 'nav'>
          <li
          onClick = {() => this.props.history.push('/')}
          className = {this.props.location.pathname === '/' ? 'active' : ''}
          >
            Create
          </li>
          <li 
            onClick = {() => this.props.history.push('/explore')}
            className = {this.props.location.pathname === '/explore' ? 'active' : ''}
          >
            Explore
          </li>
          <li
          onClick = {() => this.props.history.push('/presets')}
          className = {this.props.location.pathname === '/presets' ? 'active' : ''}
          >
            Presets
          </li>
          <li
          onClick = {() => this.props.history.push('/export')}
          className = {this.props.location.pathname === '/export' ? 'active' : ''}
          >
            Export
          </li>
        </ul>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
