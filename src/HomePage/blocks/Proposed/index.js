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
          <Link onClick={() => window.scrollTo(0, 0)} className="img" to="/at-albans-victoria">
            <div>
              <div className="st">St. Albans</div>
              <div className="area">Victoria</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Proposed;
