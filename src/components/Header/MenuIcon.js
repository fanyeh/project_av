import React, { Component } from 'react';
import classNames from 'classnames';

const styles = ['menuIcon', 'z-999'];

class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { iconStyles: styles };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      let newStyles = this.state.iconStyles.slice();
      newStyles.push('toggleMenu');
      this.setState({ iconStyles: newStyles });
    } else {
      this.setState({ iconStyles: styles });
    }
  }

  render() {
    return (
      <div onClick={this.props.onClick} className={classNames(this.state.iconStyles)}>
        <div className="mb1 bg-black" />
        <div className="mb1 bg-black" />
        <div className="bg-black" />
      </div>
    );
  }
}

export default MenuIcon;
