import React, { Component } from 'react';
import Mask from '@common/Mask';
import withHover from '@common/withHover';
import AboutCardName from './AboutCardName';
const styles = [
  'w-30-l',
  'w-100',
  'aboutCardHeight',
  'bg-white',
  'relative',
  'overflow-hidden',
  'mb3',
  'mb4-m',
  'mb0-l',
];

class AboutCard extends Component {
  render() {
    return (
      <div
        className={this.props.classes}
        onMouseEnter={this.props.hover}
        onMouseLeave={this.props.hover}
      >
        <img
          src="https://images.unsplash.com/photo-1515880584373-53ec6ab8cf60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3153f5215a4b85bdfcdb2d399c5abf0&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <Mask className="bg-navy" />
        <AboutCardName name={this.props.name} title={this.props.title} />
      </div>
    );
  }
}

export default withHover(styles)(AboutCard);
