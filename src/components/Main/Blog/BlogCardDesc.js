import React from 'react';
import classNames from 'classnames';

const styles = [
  'relative',
  'z-2',
  'pv3',
  'ph4-l',
  'ph1',
  'blogCardDesc',
  'tl',
  'f4-m',
  'f4-l',
  'f6',
  'fw7-ns',
  'fw5',
];

const BlogCardDesc = () => {
  return (
    <div className={classNames(styles)}>
      This is a sample news post title content or sample post heading.
    </div>
  );
};

export default BlogCardDesc;
