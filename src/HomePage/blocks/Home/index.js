import React from 'react';
import Slider from "react-slick";

class HomeBlock extends React.PureComponent {
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
      <div className="block home-block">
        <Slider className="cover-flow" {...settings}>
          {Array(3).fill(null).map(i =>
            <div key={i}>
              <div className="img" />
            </div>
          )}
        </Slider>
        <div className="logo-block">
          <div className="logo" />
          <ul className="slogan">
            <li>Property</li>
            <li>Development</li>
            <li>Investment</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeBlock;
