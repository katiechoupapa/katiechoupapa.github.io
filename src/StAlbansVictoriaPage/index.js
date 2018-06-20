import React from 'react';

class StAlbansVictoria extends React.Component {
  directToHomeContact = () => {
    document.body.classList.remove('popup');
    this.props.history.push("/");
    setTimeout(() => {
      document.documentElement.scrollTop = document.getElementById('contact').offsetTop;
    });
  }
  showPopup = () => {
    document.body.classList.add('popup');
  }
  closePopup = e => {
    if(e.target === this.bg) {
      document.body.classList.remove('popup');
    }
  }
  render () {
    return (
      <div className="at-albans-victoria-page">
        <div className="banner">
          <div className="container">
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
          <div className="bg-black" ref={elem => this.bg = elem} onClick={this.closePopup}>
            <div className="popup">
              <p>
                Please to contact us to know details. <br/>
                请联系我们了解更多细节
              </p>
              <a onClick={this.directToHomeContact}>Contact us</a>
            </div>
          </div>
          <ul>
            <li><a rel="noopener noreferrer" onClick={this.showPopup} className="link">Financial Summary</a></li>
            <li><a rel="noopener noreferrer" onClick={this.showPopup} className="link">Plans & Details</a></li>
            <li><a rel="noopener noreferrer" onClick={this.showPopup} className="link">中文版简报</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StAlbansVictoria;
