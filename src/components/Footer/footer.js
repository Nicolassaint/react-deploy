import React from 'react';
import image_footer from './footer.png';
import instagram_logo from './instagram.webp';
import linkedin_logo from './linkedin.webp';
import './footer.css';

export default function footer() {
  return (
    <div id='slider_footer'>
      <img src={image_footer} alt='image_footer' className='image_footer' />
      <div id='logos_reseaux'>
        <a href='https://www.instagram.com/juniorjeece/?hl=fr'>
          <img
            src={instagram_logo}
            alt='instagram_logo'
            className='instagram_logo'
          />
        </a>
        <a href='https://www.linkedin.com/company/jeece/posts/?feedView=all'>
          <img
            src={linkedin_logo}
            alt='linkedin_logo'
            className='linkedin_logo'
          />
        </a>
      </div>
      <div id='texte_footer'>
        <span className='texte_footer'>10 rue sextius michel</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='texte_footer'>Paris 75010</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='texte_footer'>contact@jeece.fr</span>
      </div>
    </div>
  );
}
