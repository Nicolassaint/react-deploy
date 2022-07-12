import React from 'react';
import image_accueil from './image_accueil.png';
import { Link } from 'react-router-dom';
import './Accueil.css';

export default function Accueil() {
  return (
    //Image JEECE avec les deux boutons
    <>
      <div id='slider'>
        <img
          src={image_accueil}
          alt='image_accueil'
          className='image_accueil'
        />
        <div id='contenu_slider'>
          <Link to='/Depot'>
            <button type='button' className='bouton_accueil'>
              Déposer votre projet
            </button>
          </Link>{' '}
          <br /> <br />
          <button type='button' className='bouton_accueil'>
            Notre plaquette
          </button>
        </div>
      </div>
    </>
  );
}
