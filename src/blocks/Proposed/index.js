import React from 'react';
import PropTypes from 'prop-types';

class Proposed extends React.Component {
  render () {
    return (
      <div className="block proposed-block">
        <div className="container">
          <div className="sub-title">PROPOSED DEVELOPMENT</div>
          <a className="img" href="#">
            <div>
              <div className="st">St. Albans</div>
              <div className="area">Victoria</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Proposed;
