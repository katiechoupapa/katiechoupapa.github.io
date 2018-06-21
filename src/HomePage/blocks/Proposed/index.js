import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Proposed extends React.Component {
  render () {
    return (
      <div id="proposed" className="block proposed-block">
        <div className="container">
          <div className="sub-title">PROPOSED DEVELOPMENT</div>
          <Link onClick={() => window.scrollTo(0, 0)} className="img albans" to="/at-albans-victoria">
            <div>
              <div className="main-text">St. Albans</div>
              <div className="sub-text">Victoria</div>
            </div>
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} className="img he" to="/hawthorn-east">
            <div>
              <div className="main-text">Hawthorn East</div>
              <div className="sub-text">Victoria</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Proposed;
