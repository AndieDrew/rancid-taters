import React from 'react';
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className='header'>
      <span className='header-contents'>
       <img src={logo} className="logo" alt="logo" />
      </span>
    </header>
  )
}

export default Header;
