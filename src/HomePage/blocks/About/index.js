import React from 'react';

class About extends React.PureComponent {
  render () {
    return (
      <div id="about" className="block about-block">
        <div className="container">
          <div className="row about">
            <div className="col-md-6 title">
              About Us
            </div>
            <div className="col-md-6 text padding">
              <p>Scheracon is a property developer in Australia, focused on the Victoria/ Tasmania market which
specializes in commercial and residential properties.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
