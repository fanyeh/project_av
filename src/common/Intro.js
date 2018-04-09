import React from 'react';
import PropTypes from 'prop-types';
import FlexBox from '@common/FlexBox';
import classNames from 'classnames';

const Intro = props => {
  return (
    <FlexBox>
      <div className="w-50-l w-100">
        <h1 className="f-headline-l f-subheadline-m f1 dark-red mb0 mt5-l mt0 introHeader">
          {props.header}
        </h1>
        <h2 className="f1-l f2-m f3 mv0 introSubtitle">{props.subtitle}</h2>
        <p className="f4-ns f5-m f6">{props.description}</p>
        {props.contact && (
          <div className="contact">
            <i className="fas fa-phone mr5 f4-ns f6"> +8197654321</i>
            <i className="fas fa-envelope f4-ns f6"> contact@domain.com</i>
          </div>
        )}
      </div>
      <div className={classNames('w-50-l w-100', props.childrenStyle)}>{props.children}</div>
    </FlexBox>
  );
};

Intro.propTypes = {
  header: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default Intro;
