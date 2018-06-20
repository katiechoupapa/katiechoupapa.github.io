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
                St. Albans Victoria
              </div>
              <div className="address">
                Proposed Development
              </div>
            </div>
          </div>
        </div>
        <div className="container info">
          <div className="row">
            <div className="col-md-4">
              <div className="header">Total cost</div>
              <div className="number">About AUD 8,500,000.00</div>
            </div>
            <div className="col-md-4">
              <div className="header">End Value</div>
              <div className="number">About AUD 1,100,000.00</div>
            </div>
            <div className="col-md-4">
              <div className="header">Return</div>
              <div className="percentage">33%</div>
            </div>
          </div>
        </div>
        <div className="block link-block">
          <ul>
            <li><a target="_blank" href="https://drive.google.com/open?id=11a1xqGLSMBs1TibMgZJtEsbDhNxUKOXz" className="link">Financial Summary</a></li>
            <li><a target="_blank" href="https://drive.google.com/open?id=12rlOpkAcTupV2gq5vlfup_zUtLDWwH1Z" className="link">Plans & Details</a></li>
            <li><a target="_blank" href="https://drive.google.com/open?id=1brXg3G0DQCvdogilNJIvRLDI66P1AZM1" className="link">中文版简报</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StAlbansVictoria;
