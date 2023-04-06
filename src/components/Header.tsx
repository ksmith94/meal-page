import React from 'react';
import styled from 'styled-components/macro';
import './Header.css';
import SearchBar from './Search';

function Header(): JSX.Element {
  return (
    <AppHeader>
      <HeaderTitle>Kevin's Kitchen</HeaderTitle>
      <nav className='header-links'>
        <HeaderMenu>
          <li className='header-link'><MenuLinks href='/'>Home</MenuLinks></li>
          <li className='header-link'><MenuLinks href="/recipes">Recipes</MenuLinks></li>
          <li className='header-link'><MenuLinks href="/favorites">Favorites</MenuLinks></li>
          <li className='header-link'><MenuLinks href="/about">About</MenuLinks></li>
        </HeaderMenu>
      </nav>
      <SearchBar />
    </AppHeader>
  );
}

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 24px;
  background-color: hsl(193deg 75% 85%);
  position: sticky;
  top: 0;
`

const HeaderMenu = styled.ul`
  list-style: none;
  margin-right: 4px;
  padding: 8px;
`

const MenuLinks = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;;
  }
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  text-align: center;
`

export default Header;
