import React from 'react';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#teaching">Teaching</a></p>
    <p><a href="#research">Research</a></p>
    <p><a href="#seminar">Seminar</a></p>
    </>
)

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <h1>Junping Jiang</h1>
        </div>
        <div className='navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#teaching'>Teaching</a></p>
          <p><a href='#research'>Research</a></p>
          <p><a href='#seminar'>Seminar</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar