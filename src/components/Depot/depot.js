import React from 'react';
import image_depot from './depot.png';
import './depot.css';

export default function depot() {
  return (
    <div>
      <img src={image_depot} alt='image_depot' className='image_depot' />
    </div>
  );
}
