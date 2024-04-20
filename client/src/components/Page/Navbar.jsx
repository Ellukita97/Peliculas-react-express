import React from 'react'
import './Navbar.css'
import SignUp_btn from '../buttons/SignUp_btn'
import Search_Input from '../inputs/Search_Input'
import BtnCircle from '../buttons/BtnCircle'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className='container-header_nav'>
      <nav className='container_nav'>
        <h2 className='Logo'>CINE</h2>
        <ul className='container-pagination_nav'>
          <li>
            <a href={`/`}>
              Home
            </a>
          </li>
          <li>
            <a href={`/Pelicula`}>
              Peliculas
            </a>
          </li>
          <li>
            <a href={`/`}>
              Generos
            </a></li>
        </ul>
        <div className='container-user_nav'>
          <Search_Input />
          <SignUp_btn />
          <BtnCircle colorBtn='red' title='Registrarse' />
          
        </div>

      </nav>
    </header>
  )
}

export default Navbar