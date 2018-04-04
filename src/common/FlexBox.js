import React, { Component } from 'react';
import classNames from 'classnames';

const styles = ['flex', 'w-60', 'center'];

class FlexBox extends Component {
  render() {
    const classes = classNames(styles, this.props.className);
    return <div className={classes}>{this.props.children}</div>;
  }
}

export default FlexBox;
