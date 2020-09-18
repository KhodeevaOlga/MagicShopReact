import React from 'react';
import './index.css'

export const ListItem =({name, price, image})=>{
  return (
    <div className='all-about-lamp'>

      <div className='column'>
        <img src={image} alt='image-product'/>
      </div>

      <div className='about-lamp'>
        <li className='header-description'>{name}</li>
        <li className='inform-ab-price'>${price}</li>

      </div>
    </div>
  )
};