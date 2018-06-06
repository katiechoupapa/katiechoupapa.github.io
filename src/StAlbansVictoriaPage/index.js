import React from 'react';

class StAlbansVictoria extends React.Component {
  render () {
    return (
      <div className="at-albans-victoria-page">
        <div className="banner">
          <div className="container">
            <div className="logo" />
            <div className="text">
              <div className="subject">
                PROPOSED DEVELOPMENT
              </div>
              <div className="address">
                23 Victoria Cresent St. Albans
              </div>
            </div>
          </div>
        </div>
        <div className="container info">
          <div className="row">
            <div className="col-md-4">
              <div className="header">Total cost</div>
              <div className="number">AUD 8,472,670.00</div>
            </div>
            <div className="col-md-4">
              <div className="header">End Value</div>
              <div className="number">AUD 8,472,670.00</div>
            </div>
            <div className="col-md-4">
              <div className="header">Return</div>
              <div className="percentage">33%</div>
            </div>
          </div>
        </div>
        <div className="block link-block">
          <ul>
            <li><a href="#" className="link">Financial Summary</a></li>
            <li><a href="#" className="link">Plans & Details</a></li>
            <li><a href="#" className="link">中文版简报</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StAlbansVictoria;
