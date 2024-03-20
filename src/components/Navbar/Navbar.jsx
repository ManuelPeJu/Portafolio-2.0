import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav id="navbar" className='navbar'>
        <h1>
          <a href="#home">Manuel Pérez Jurado</a>
        </h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar