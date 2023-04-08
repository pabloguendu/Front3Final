import React, { useContext } from 'react'
import { ContextGlobal } from './utils/ApiContext';

const Footer = () => {
  const {state}=useContext(ContextGlobal);
  return (
    <footer className={state.darkMode?'navbar navbar-expand-lg navbar-light bg-light':'navbar navbar-expand-lg navbar-dark bg-dark'}>
        <h3 className={state.dark?'color:white':'color:black'}>Powered by</h3>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
