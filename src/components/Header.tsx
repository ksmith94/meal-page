import React from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <header className="header">
      <h1 className="header-title">Kevin's Kitchen</h1>
      <nav className='header-links'>
        <ul className='header-link-list'>
          <li className='header-link'><a href='/'>Home</a></li>
          <li className='header-link'><a href="/recipes">Recipes</a></li>
          <li className='header-link'><a href="/favorites">Favorites</a></li>
          <li className='header-link'><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
