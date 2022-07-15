import React, { useRef } from 'react';
import image_depot from './depot.png';
import emailjs from 'emailjs-com';
import './depot.css';

export default function depot() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0ee8kvr',
        'template_gnzy258',
        e.target,
        'pAikWzk1e7ghsUdWg'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id='slider_depot'>
      <img src={image_depot} alt='image_depot' className='image_depot' />
      <div id='contenu_slider_depot'>
        <form onSubmit={sendEmail}>
          <input
            type='text'
            placeholder='Nom'
            className='input_text'
            name='nom'
            required
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='Prénom'
            className='input_text'
            name='prenom'
            required
          />
          <br />
          <br />
          <input
            type='email'
            placeholder='Mail'
            className='input_text'
            name='email'
            required
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='Téléphone'
            className='input_text'
            name='telephone'
            required
          />
          <br />
          <br />
          <textarea
            type='text'
            placeholder='Message'
            className='input_message'
            name='message'
            resize='none'
            required
          ></textarea>
          <br />
          <br />
          <input
            type='submit'
            placeholder='Envoyer'
            className='bouton_envoyer'
          />
        </form>
      </div>
    </div>
  );
}
