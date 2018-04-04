import React, { Component } from 'react';
import Mask from '@common/Mask';
import withHover from '@common/withHover';
import BlogCardImage from './BlogCardImage';
import BlogCardDesc from './BlogCardDesc';
import BlogCardDate from './BlogCardDate';

const styles = ['w-100', 'relative', 'mb4'];

class BlogCard extends Component {
  render() {
    return (
      <div
        className={this.props.classes}
        onMouseEnter={this.props.hover}
        onMouseLeave={this.props.hover}
      >
        <Mask className="bg-white z-1" />
        <BlogCardImage src={this.props.src} />
        <BlogCardDesc />
        <BlogCardDate />
      </div>
    );
  }
}

export default withHover(styles)(BlogCard);
