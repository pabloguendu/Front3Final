import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/ApiContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Error = () => {
  const {state}=useContext(ContextGlobal);


  return (
    <div className={state.darkMode?'white':'dark'}>
      <h1>Error en la ruta especificada</h1>
    </div>
  )
}

export default Error;