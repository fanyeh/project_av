import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <NavBar items={['home', 'about', 'blog', 'contact']} />
    </header>
  );
};

export default Header;
