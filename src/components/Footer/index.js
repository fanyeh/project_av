import React from 'react';
import Social from './Social';
import FooterMenu from './FooterMenu';
import classNames from 'classnames';

const styles = ['w-100', 'bg-white'];
const menuItems = ['home', 'about', 'blog', 'contact'];
const socialItems = ['fa-twitter', 'fa-google-plus-g', 'fa-instagram', 'fa-youtube'];

const Footer = () => {
  return (
    <div className={classNames(styles)}>
      <div className="w-50-ns w-100 center tc pv2">
        <h1 className="mv5-ns mv2 f1-ns f2 fw4">AV</h1>
        <FooterMenu items={menuItems} />
        <Social items={socialItems} />
        <span className="mt4-ns mt2 dib f6 gray fw2">&copy; All rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
