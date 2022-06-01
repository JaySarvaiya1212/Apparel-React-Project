import React from 'react';
import '../Card.css';

const image = 'N/A';

function Card({ cloth }) {
  return (
    <div className='cloth'>
      <div>
        <p> {cloth.type} </p>
      </div>
      <div>
        <img
          src={
            cloth.image !== 'N/A'
              ? cloth.image
              : 'https://via.placeholder.com/400'
          }
          alt='image'
        />
      </div>
      <div>
        <span> {cloth.title} </span>
        <h3> {cloth.price} </h3>
      </div>
    </div>
  );
}

export default Card;
