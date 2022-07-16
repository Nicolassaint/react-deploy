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
        <div id='conteneur_principal'>
          <div id='contenu_texte_intro'>
            <span id='texte_chiffres_clés'>
              <br />
              Spécialisée dans les technologies du numérique tel que
              l’informatique et l’électronique,
              <br /> JEECE accompagne les entreprises dans la réalisation de
              leurs projets liés aux nouvelles technologiques <br />
              depuis 1986.
            </span>
            <br />
            <br />
            <br />
          </div>

          <div id='conteneur_chiffres_clés'>
            <br /> <br />
            <div className='contenu_stats'>
              <span className='texte_grand_vert'>36</span>
              <br /> <br />
              <span className='texte_petit_annexe'>
                Ans <br />
                d'expérience
              </span>
            </div>
            <div className='contenu_stats'>
              <span className='texte_grand_vert'>90</span>
              <br /> <br />
              <span className='texte_petit_annexe'>
                Membres <br />
                pour vous accompagner
              </span>
            </div>
            <div className='contenu_stats'>
              <span className='texte_grand_vert'>12</span>
              <br /> <br />
              <span className='texte_petit_annexe'>
                Ans dans la liste des <br />
                30 meilleures Junior-Entreprises
              </span>
            </div>
            <div className='contenu_stats'>
              <span className='texte_grand_vert'>103</span>
              <br /> <br />
              <span className='texte_petit_annexe'>
                L'ECE, une école centenaire
              </span>
            </div>
          </div>
        </div>
        <br />
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
