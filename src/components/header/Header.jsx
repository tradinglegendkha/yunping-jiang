import React from 'react';
import './header.css';
import jiang from '../../assets/jiang.png';

const Header = () => {
  return (
    <div className='header section-padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient-text'>The Distinguished Professor of Mathematics</h1>
        <p>At Queens College and Graduate Center of the City University of New York</p>
      </div>
      <div className='header-image'>
        <img src={jiang} alt='jiang'/>
      </div>
    </div>
  )
}

export default Header