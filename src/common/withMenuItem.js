import React from 'react';
import { Link } from 'react-router-dom';

const withMenuItem = WrappedComponent => {
  return class extends React.Component {
    itemStyle = () => {
      return this.isCurrent() ? 'dark-red' : 'black';
    };

    itemLink = () => {
      const item = this.props.item;
      return this.isCurrent() ? item : <Link to={`/${item === 'home' ? '' : item}`}>{item}</Link>;
    };

    isCurrent = () => {
      const pathname = window.location.pathname;
      const item = this.props.item;
      return pathname === `/${item}` || (pathname === `/` && item === 'home');
    };

    render() {
      return (
        <WrappedComponent {...this.props} className={this.itemStyle()} link={this.itemLink()} />
      );
    }
  };
};

export default withMenuItem;
