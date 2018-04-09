import React, { Component } from 'react';
import classNames from 'classnames';
import withMenuItem from '@common/withMenuItem';

const styles = ['dib', 'mh3-ns', 'mh2', 'ttu', 'mb4-ns', 'mb2', 'moon-gray', 'cp', 'f6', 'f5-ns'];

class FooterMenuItem extends Component {
  render() {
    return <li className={classNames(styles, this.props.className)}>{this.props.link}</li>;
  }
}

export default withMenuItem(FooterMenuItem);
