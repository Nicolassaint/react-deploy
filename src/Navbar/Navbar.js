import React, { useState, useEffect } from 'react';
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
      <img
        src={logo}
        alt='img'
        className='logo_blanc'
        width='50px'
        height='59px'
      />

      {(toggleMenu || largeur > 570) && (
        <ul className='liste'>
          <li className='items'>Accueil</li>
          <li className='items'>Notre structure</li>
          <li className='items'>Nos offres</li>
          <li className='items'>Contact</li>
          <li className='items'>Plaquette</li>
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
