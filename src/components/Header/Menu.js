import React, { Component } from 'react';
import classNames from 'classnames';
import MenuItem from './MenuItem';

const styles = ['fixed', 'w-100', 'vh-100', 'left-0', 'top-0', 'bg-white', 'o-80', 'z-4', 'menu'];

class Menu extends Component {
  render() {
    return (
      <div className={classNames(styles, { slide: this.props.show })}>
        <div className="w-60 center tc mt7 relative z-999">
          {this.props.items.map(item => <MenuItem item={item} key={item} />)}
        </div>
      </div>
    );
  }
}

export default Menu;
