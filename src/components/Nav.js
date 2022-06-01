import React from 'react';
import '../Nav.css';

function Nav({ apparel }) {
  return (
    <div className='container'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search here'
          onChange={(e) =>
            apparel(e.target.value ? e.target.value.toUpperCase() : 'All')
          }
        />
      </div>
      <ul>
        <li key={'All'} onClick={() => apparel('All')}>
          All
        </li>
        <li key={'shirt'} onClick={() => apparel('Shirt')}>
          Shirt
        </li>
        <li key={'pant'} onClick={() => apparel('Pant')}>
          Pant
        </li>
        <li key={'kurta'} onClick={() => apparel('Kurta')}>
          Kurta
        </li>
        <li key={'suit'} onClick={() => apparel('Suit')}>
          Suit
        </li>
      </ul>
    </div>
  );
}

export default Nav;
