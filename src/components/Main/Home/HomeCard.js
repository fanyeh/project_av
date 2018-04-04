import React, { Component } from 'react';
import Mask from '@common/Mask';
import withHover from '@common/withHover';
import HomeCardHeader from './HomeCardHeader';
import HomeCardText from './HomeCardText';

const styles = ['w-100', 'relative', 'mb1'];

class HomeCard extends Component {
  render() {
    return (
      <div
        className={this.props.classes}
        onMouseEnter={this.props.hover}
        onMouseLeave={this.props.hover}
      >
        <img src={this.props.src} alt="" />
        <Mask className="bg-navy" />
        <HomeCardHeader />
        <HomeCardText />
      </div>
    );
  }
}

export default withHover(styles)(HomeCard);
