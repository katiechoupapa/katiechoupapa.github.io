import React from 'react';

class About extends React.PureComponent {
  render () {
    return (
      <div id="about" className="block about-block">
        <div className="container">
          <div className="row about">
            <div className="col-md-6 title">
              ABOUT SCHERACON
            </div>
            <div className="col-md-6 text padding">
              <p>Scheracon is a property developer in Australia, focused on the Victoria/ Tasmania market which
specializes in commercial and residential properties.</p>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              </div>
              <div className="col-md-6">
                <div className="title">Our Vision</div>
                <div className="text">We provide a platform for international investors to entry the Australia property developed business
for positive investment returns and provide solutions further international relations.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
