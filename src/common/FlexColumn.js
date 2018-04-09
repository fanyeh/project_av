import React from 'react';
import classNames from 'classnames';

const styles = ['flex', 'flex-column'];

function FlexColumn(props) {
  const classes = classNames(styles, props.className);
  return <div className={classes}>{props.children}</div>;
}

export default FlexColumn;
