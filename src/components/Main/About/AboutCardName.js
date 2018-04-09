import React from 'react';
import PropTypes from 'prop-types';

const AboutCardName = props => {
  return (
    <div className="w-60 bg-dark-red absolute bottom-0 tc aboutCardName">
      <h1 className="ttc f5-ns f6 mv1 mv2-ns white">{props.name}</h1>
      <h1 className="ttu f5-ns f6 mv1 mv2-ns white">{props.title}</h1>
    </div>
  );
};

AboutCardName.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default AboutCardName;
