import React, { Component } from 'react';
import './App.css';

import {
  Menu,
  Home,
  About,
  Service,
  Project,
  Proposed,
  Director,
  Guarantee,
  Contact,
} from './blocks';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <Home />
        <About />
        <Service />
        <Project />
        <Proposed />
        <Director />
        <Guarantee />
        <Contact />
        <footer>
          ©2018 Scheracon Victoria, Australia
        </footer>
      </div>
    );
  }
}

export default App;
