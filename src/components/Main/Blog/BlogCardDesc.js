import React from 'react';
import classNames from 'classnames';

const styles = ['relative', 'z-2', 'pv3', 'ph5', 'blogCardDesc', 'tl', 'f4', 'fw7'];

const BlogCardDesc = () => {
  return (
    <div className={classNames(styles)}>
      This is a sample news post title content or sample post heading.
    </div>
  );
};

export default BlogCardDesc;
