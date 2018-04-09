import React, { Component } from 'react';
import classNames from 'classnames';

const styles = [
  'flex',
  ' w-60-l',
  'w-80-m',
  'w-90',
  'center',
  'flex-column',
  'flex-row-l',
  'flexBox',
];

class FlexBox extends Component {
  render() {
    const classes = classNames(styles, this.props.className);
    return <div className={classes}>{this.props.children}</div>;
  }
}

export default FlexBox;
