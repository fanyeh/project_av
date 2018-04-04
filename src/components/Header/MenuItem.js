import React, { Component } from 'react';
import classNames from 'classnames';
import withMenuItem from '@common/withMenuItem';

const styles = ['mb4', 'f2', 'fw7', 'ttc', 'no-underline', 'menuItem'];

class MenuItem extends Component {
  render() {
    return <div className={classNames(styles, this.props.className)}>{this.props.link}</div>;
  }
}

export default withMenuItem(MenuItem);
