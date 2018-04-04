import React from 'react';
import classNames from 'classnames';
const styles = ['w-100', 'max-vh-50', 'overflow-hidden'];

const BlogCardImage = props => {
  return (
    <div className={classNames(styles)}>
      <img className="db blogCardImg" src={props.src} alt="" />
    </div>
  );
};

export default BlogCardImage;
