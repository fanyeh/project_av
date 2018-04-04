import React from 'react';
import PropTypes from 'prop-types';

const Intro = props => {
  return (
    <div className="itemHeight">
      <h1 className="f-headline dark-red mb0 mt5">{props.header}</h1>
      <h2 className="f1 mt0">{props.subtitle}</h2>
      <p className="f4">{props.description}</p>
      {props.children}
    </div>
  );
};

Intro.propTypes = {
  header: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default Intro;
