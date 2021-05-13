import React from 'react';
import './header.css';
import tater from './potatos.png';

const Header = () => {
  return (
    <header className='header'>
      <span>
        <h1 className='pageTitle'> Rancid Taters!
        <img src={tater} className="tater-logo" alt="logo" />
        </h1>
      </span>
    </header>
  )
}

export default Header;
