import React from 'react';
import classNames from 'classnames';

const styles = ['absolute', 'top-0', 'w-100', 'h-100', 'mask'];

const Mask = props => {
  const classes = classNames(styles, props.className);
  return <div className={classes} />;
};

export default Mask;
