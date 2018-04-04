import React from 'react';
import FooterMenuItem from './FooterMenuItem';
import classNames from 'classnames';

const styles = ['ma0', 'mt3', 'list', 'pa0', 'footerMenu'];

const FooterMenu = props => {
  const items = props.items;
  return (
    <ul className={classNames(styles)}>
      {items.map((item, index) => <FooterMenuItem item={item} key={index} />)}
    </ul>
  );
};

export default FooterMenu;
