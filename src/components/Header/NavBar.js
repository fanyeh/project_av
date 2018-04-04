import React, { Component } from 'react';
import classNames from 'classnames';
import MenuIcon from './MenuIcon';
import Menu from './Menu';

const styles = ['w-60', 'center', 'ph2', 'flex', 'justify-between', 'items-center', 'pb4', 'pt5'];

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
      <nav className={classNames(styles)} ref="nav">
        <div className="f1 ">AV</div>
        <MenuIcon onClick={this.toggleMenu} open={this.state.showMenu} />
        <Menu items={this.props.items} show={this.state.showMenu} />
      </nav>
    );
  }
}

export default NavBar;
