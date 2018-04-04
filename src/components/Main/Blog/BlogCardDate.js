import React from 'react';
import classNames from 'classnames';

const styles = [
  'white',
  'bg-dark-red',
  'absolute',
  'top-0',
  'left-0',
  'tc',
  'pa3',
  'bg-white',
  'z-2',
];

const BlogCardDate = () => {
  return (
    <div className={classNames(styles)}>
      <h1 className="f1 ma0 lh-solid">24</h1>
      <span className="ttu fw9 f6">july 2016</span>
    </div>
  );
};

export default BlogCardDate;
