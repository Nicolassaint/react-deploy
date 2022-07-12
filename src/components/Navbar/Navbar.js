import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';
import logo from './logoJEECE_blanc.png';
import logo_menu from './logo_menu.png';

export default function Navbar() {
  //const image1 = require("./LogoJEECE_blanc.png").default;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 570) {
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
      <Link to='/'>
        <img
          src={logo}
          alt='img'
          className='logo_blanc'
          width='50px'
          height='59px'
        />
      </Link>

      {(toggleMenu || largeur > 570) && (
        <ul className='liste'>
          <Link to='/'>
            <li className='items'>Accueil</li>
          </Link>
          <CustomLink to='/Notre_structure'>
            <li className='items'>Notre structure</li>
          </CustomLink>
          <CustomLink to='/Nos_offres'>
            <li className='items'>Nos offres</li>
          </CustomLink>
          <CustomLink to='/Contact'>
            <li className='items'>Contact</li>
          </CustomLink>
          <CustomLink to='/Plaquette'>
            <li className='items'>Plaquette</li>
          </CustomLink>
        </ul>
      )}

      <input
        type='image'
        src={logo_menu}
        onClick={toggleNavSmallScreen}
        className='btn'
      />
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
