import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/ApiContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,dispatch}=useContext(ContextGlobal);
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE' });
  };


  return (
    <nav className={state.darkMode?'navbar navbar-expand-lg navbar-light bg-light':'navbar navbar-expand-lg navbar-dark bg-dark'}>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/favs">Favorito</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact">Contacto</Link> 
        </li>
        <li>
        <button onClick={toggleDarkMode} type="button" className={state.darkMode ?'btn btn-light':'btn btn-dark'}>
          {state.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </li>
      </ul>
    </div>
    </nav>






  )
}

export default Navbar