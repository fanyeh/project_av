import React from 'react';
import PropTypes from 'prop-types';

const AboutCardName = props => {
  return (
    <div className="w-60 bg-yellow absolute bottom-0 tc aboutCardName">
      <h1 className="ttc f5">{props.name}</h1>
      <h1 className="ttu f5">{props.title}</h1>
    </div>
  );
};

AboutCardName.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default AboutCardName;
