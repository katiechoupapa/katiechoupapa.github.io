import cx from 'classnames';
import React from 'react';
import { withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Menu extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }
  directToHome = () => {
    this.props.history.push("/");
  }
  render () {
    const event = { onMouseUp: this.directToHome };
    const { open } = this.state;
    return (
      <div className="menu">
        <div
          className={cx("menu-button", { open })}
          onClick={this.handleClick}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul>
          <li><AnchorLink {...event} href="#about">About</AnchorLink></li>
          <li><AnchorLink {...event} href="#service">Service</AnchorLink></li>
          <li><AnchorLink {...event} href="#project">Projects</AnchorLink></li>
          <li><AnchorLink {...event} href="#proposed">Proposed Development</AnchorLink></li>
          <li><AnchorLink {...event} href="#director">Director</AnchorLink></li>
          <li><AnchorLink {...event} href="#guarantee">Guarantee</AnchorLink></li>
          <li><AnchorLink {...event} href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
