import React from 'react';
import './Contact.css';
import { PopupButton } from 'react-calendly';

export default function Contact() {
  return (
    <div className='App'>
      <PopupButton
        url='https://calendly.com/nicolas-saint/jeece-rendez-vous-telephonique'
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('root')}
        text='Réserver un créneau téléphonique'
        className='bouton_calendly'
      />
    </div>
  );
}
