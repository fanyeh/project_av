import React, { Component } from 'react';
import classNames from 'classnames';

class HomeCardText extends Component {
  render() {
    const classes = classNames('ba', 'bw1', 'b--white', 'absolute', 'o-0', 'homeCardText');
    return (
      <div className={classes}>
        <h1 className="f5 tc white v-center relative">Lorem ipsum dolor sit amet consectetur.</h1>
      </div>
    );
  }
}

export default HomeCardText;
