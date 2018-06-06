import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

class Proposed extends React.Component {
  render () {
    return (
      <div className="block proposed-block">
        <div className="container">
          <div className="sub-title">PROPOSED DEVELOPMENT</div>
          <Link className="img" to="/at-albans-victoria">
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
