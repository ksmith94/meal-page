import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import './Header.css';
import Menu from './Menu';
import SearchBar from './Search';


function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <AppHeader>
      <div 
        role='button'
        className='menu-icon' 
        onClick={handleMenuClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleMenuClick
          }
        }}
        tabIndex={0}
      >
        <StyledIcon icon={faBars} />
        {isOpen && <Menu />}
      </div>
      <HeaderLink to="/"><HeaderTitle>Kevin&apos;s Kitchen</HeaderTitle></HeaderLink>
      <SearchBar />
    </AppHeader>
  );
}

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 24px;
  background-color: hsl(217 55% 65%);
  position: fixed;
  top: 0;
`

// const HeaderMenu = styled.ul`
//   list-style: none;
//   margin-right: 4px;
//   padding: 8px;
// `

// const MenuLinks = styled.a`
//   color: black;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;;
//   }
// `

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: hsl(217 70% 25%);
  text-align: center;
  text-decoration: none;
`

const HeaderLink = styled(Link)`
  text-decoration: none;
`

export default Header;
