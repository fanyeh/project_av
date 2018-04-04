import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const iconStyles = ['pa3', 'ma3', 'bg-moon-gray', 'white', 'br-100', 'f4', 'cp', 'fab'];

const Social = props => {
  return (
    <div className="social">
      {props.items.map(style => <i className={classNames(style, iconStyles)} key={style} />)}
    </div>
  );
};

Social.propTypes = {
  items: PropTypes.array,
};

export default Social;
