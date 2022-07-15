import React from 'react';
import image_accueil from './image_accueil.png';
import image_chiffres_clés from './chiffres_clés.png';
import image_ligne_verte from './ligne_verte.png';
import image_valeurs from './valeurs.png';
import image_confiance from './confiance.png';
import pdf from './Plaquette_Commerciale.pdf';
import { Link } from 'react-router-dom';
import './Accueil.css';

export default function Accueil() {
  return (
    //Image JEECE avec les deux boutons
    <>
      <div id='slider_accueil'>
        <img
          src={image_accueil}
          alt='image_accueil'
          className='image_accueil'
        />
        <div id='contenu_slider_accueil'>
          <Link to='/Depot'>
            <button type='button' className='bouton_accueil'>
              Déposer votre projet
            </button>
          </Link>{' '}
          <br /> <br />
          <a href={pdf} target='_blank'>
            <button type='button' className='bouton_accueil'>
              Notre plaquette
            </button>
          </a>
        </div>
        <img
          src={image_chiffres_clés}
          alt='image_chiffres_clés'
          className='image_chiffres_clés'
        />
        <img
          src={image_ligne_verte}
          alt='image_ligne_verte'
          className='image_ligne_verte'
        />
        <img
          src={image_valeurs}
          alt='image_valeurs'
          className='image_valeurs'
        />
        <img
          src={image_confiance}
          alt='image_confiance'
          className='image_confiance'
        />
      </div>
    </>
  );
}
