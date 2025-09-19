import React from 'react';
import logoImg from '../assets/logo1.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <h1 className="logo">
            <Link to='/'>
                <img src={logoImg} alt="logo" /><span>CITY </span><span>EXPLORER</span>
            </Link>
        </h1>
        <nav className="gnb">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/city'>CITY</NavLink>
            <NavLink to='/culture'>CULTURE</NavLink>
            <NavLink to='/tips'>TIPS</NavLink>
        </nav>
    </header>
  )
}

export default NavBar