import React, { Component } from 'react';
import classNames from 'classnames';
import MenuIcon from './MenuIcon';
import Menu from './Menu';

const Styles = [
  'w-90',
  'w-80-m',
  'w-60-l',
  'center',
  'flex',
  'justify-between',
  'items-center',
  'pb4',
  'pt4-ns',
  'pt2',
  'navBar',
];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  componentDidMount() {
    /* Capture and handle click event from menu items */
    this.refs.nav.addEventListener('click', this.handleClick);
  }

  toggleMenu = () => {
    this.setState((prevState, props) => {
      return { showMenu: !prevState.showMenu };
    });
  };

  handleClick = e => {
    if (e.target.nodeName === 'A') {
      this.setState({ showMenu: false });
    }
  };

  render() {
    return (
      <nav className={classNames(Styles)} ref="nav">
        <div className="f3 f2-m f1-l">AV</div>
        <MenuIcon onClick={this.toggleMenu} open={this.state.showMenu} />
        <Menu items={this.props.items} show={this.state.showMenu} />
      </nav>
    );
  }
}

export default NavBar;
