import React from 'react';
import { Parallax } from 'react-parallax';

import {
  Home,
  About,
  Vision,
  Service,
  // Project,
  Proposed,
  Director,
  Guarantee,
  Contact,
} from './blocks';

import BG1 from './images/BG_01.png';
import BG2 from './images/BG_02.png';
import BG3 from './images/BG_03.png';
import BG4 from './images/BG_04.png';

class HomePage extends React.Component {
  render () {
    return (
      <div className="home-page">
        <Home />
        <Parallax bgImage={BG1} />
        <About />
        <Vision />
        <Parallax bgImage={BG2} />
        <Service />
        <Parallax bgImage={BG3} />
        {/* <Project /> */}
        <Proposed />
        <Parallax bgImage={BG4} />
        <Director />
        <Guarantee />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
