import React from 'react';
import PropTypes from 'prop-types';

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

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Home />
        <About />
        <Service />
        <Project />
        <Proposed />
        <Director />
        <Guarantee />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
