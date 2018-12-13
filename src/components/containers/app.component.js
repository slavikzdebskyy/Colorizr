import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './header.component';
import CreateComponent from './create.component';
import FooterComponent from './footer.component';
import ExploreComponent from './explore.component';

import '../styles.scss';

class AppComponent extends Component {

  render () {
    
    return (
      <BrowserRouter> 
        <div className = 'app-container'>
          <HeaderComponent />
            <Switch>
              <Route exact path = '/' component = {CreateComponent} /> 
              <Route path = '/explore' component = {ExploreComponent} /> 
            </Switch>
          <FooterComponent />  
        </div>           
      </BrowserRouter>      
    );
  }
}

export default AppComponent;
