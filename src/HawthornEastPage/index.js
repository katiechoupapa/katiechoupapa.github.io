import React from 'react';
import Slider from "react-slick";

class HawthornEastPage extends React.Component {
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
    const settings = {
      speed: 500,
      dots: true,
      arrow: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="hawthorn-east-page">
        <div className="banner">
          <Slider className="cover-flow" {...settings}>
            {Array(5).fill(null).map(i =>
              <div key={i}>
                <div className="img" />
              </div>
            )}
          </Slider>
          <div className="container">
            <div className="text">
              <div className="subject">
                HAWTHORN EAST
              </div>
              <div className="address">
                BOUTIQUE PERMIT APPROVED
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

export default HawthornEastPage;
