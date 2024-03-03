import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { FaBars, FaChevronRight } from "react-icons/fa";
import LogoImg from '../images/andrew-dobrzanski-logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <>
    <Navigation>
      <NavContainer>
        <Link href="/">
          <Logo src={LogoImg} />
        </Link>
        <MenuIcon onClick={handleShowNavbar} className={`${showNavbar && 'active'}`}>
          <FaBars />
          <FaChevronRight />
        </MenuIcon>
        <NavElements onClick={handleShowNavbar} className={`${showNavbar && 'active'}`}>
          <Elements>
            <Item>
              <NavLink to="/">{'Home'}</NavLink>
            </Item>
            <Item>
              <NavLink to="/portfolio">{'Portfolio'}</NavLink>
            </Item>
            <Item>
              <NavLink to="/services">{'Services'}</NavLink>
            </Item>
            <Item>
              <NavLink to="/about">{'About'}</NavLink>
            </Item>
            <Item>
              <NavLink to="/contact">{'Contact'}</NavLink>
            </Item>
          </Elements>
        </NavElements>
      </NavContainer>
    </Navigation>
    </>
  )
}

export default Navbar

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 15px;
`;
const Navigation = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  height: 100px;
  position: relative;
`;
const Logo = styled.img`
  height: 70px;
  width: auto;
`;
const MenuIcon = styled.div`
  display: none;

  :nth-child(2) {
    display: none;
  }

  &.active {
    svg:first-of-type {
      display: none;
    }
  
    :nth-child(2) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    cursor: pointer;
    display: block;
  }
`;
const NavElements = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    li {
      color: #333;
      font-weight: 500;

      &:not(:last-child) {
        margin-right: 40px;
  
        @media (max-width: 768px) {
          margin-right: 30px;
        }
      }

      a {
        color: #333;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
  
        &.active {
          color: #333;
          font-weight: 700;
          position: relative;
  
          &:after {
            background-color: #31b0d5;
            bottom: -4px;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    background-color: #31b0d5;
    height: calc(100vh - 60px);
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 100px;
    transition: all 0.3s ease-in;
    width: 0px;
    z-index: 3;

    &.active {
      width: 270px;
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        color: #fff;
        margin-right: unset;
        margin-top: 22px;

        a {
          color: #fff;
    
          &.active {
            color: #fff;
            font-weight: 700;
    
            &:after {
              background-color: #fff;
            }
          }
        }
      }
    }
  }
`;
const Elements = styled.ul``
const Item = styled.li``;
const Link = styled.a`;`