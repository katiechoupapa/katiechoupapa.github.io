import React from 'react';

class Service extends React.PureComponent {
  render () {
    return (
      <div id="service" className="block service-block">
        <div className="container">
          <h2 className="title">Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="partnerships sub-title">
                <div className="subject">Joint Ventures</div>
                <div className="detail-text">
                  Scheracon can work together with investors, we work together with investors as stakeholder to develop business opportunity.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="immigration-assistance sub-title">
                <div className="subject">Property Development</div>
                <div className="detail-text">We source suitable property for development with profitable and value shareholder returns.</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="property-development sub-title">
                <div className="subject">Consultants</div>
                <div className="detail-text">We provide the service to prospective investors for the best forms of entry into the potential
opportunity that is more appropriate to their positive.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
