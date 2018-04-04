import React, { Component } from 'react';
import classNames from 'classnames';
import withMenuItem from '@common/withMenuItem';

const styles = ['dib', 'mh3', 'ttu', 'mb4', 'moon-gray', 'cp'];

class FooterMenuItem extends Component {
  render() {
    return <li className={classNames(styles, this.props.className)}>{this.props.link}</li>;
  }
}

export default withMenuItem(FooterMenuItem);
