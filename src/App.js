import React, { Component } from 'react';
import {
  Route,
  Switch,
  HashRouter,
} from 'react-router-dom';

import HomePage from './HomePage';
import StAlbansVictoriaPage from './StAlbansVictoriaPage';
import Menu from './Menu';


import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper">
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/at-albans-victoria" component={StAlbansVictoriaPage} />
          </Switch>
          <footer>
            ©2018 Scheracon Victoria, Australia
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
