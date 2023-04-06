import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/ApiContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists}=useContext(ContextGlobal);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length && dentists.map((dentist) => (
         <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        ))}

      </div>
    </main>
  )
}

export default Home