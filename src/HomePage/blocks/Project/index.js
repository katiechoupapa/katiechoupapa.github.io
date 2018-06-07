import React from 'react';
import Slider from "react-slick";

const getImageHeight = () => {
  return window.innerHeight - document.getElementsByClassName('menu')[0].clientHeight;
};

class Project extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.autoFit);
    this.autoFit();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.autoFit);
  }
  autoFit = () => {
    this.setState({
      height: getImageHeight()
    });
  }
  render () {
    var settings = {
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="project" className="block project-block">
        <div className="title">Projects</div>
        <div className="sub-title">Build in Luxury and Reliable</div>
        <div className="container">
          <Slider className="cover-flow" {...settings}>
            {Array(11).fill(null).map(i =>
              <div key={i}>
                <div className="img" style={{ height: `${this.state.height}px` }} />
              </div>
            )}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Project;
