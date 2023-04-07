import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/ApiContext';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists}=useContext(ContextGlobal);
  function getDentistsId (id){
    localStorage.setItem(id,JSON.stringify(dentists[id-1]));  
  }

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length && dentists.map((dentist) => (
         <Link key={dentist.id} className='link-text-decoration' to={`/detail/${dentist.id}`}>
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}>
          <button onClick={()=>getDentistsId(dentist.id)}>Add fav</button>
         </Card>
         </Link>
         
        ))}
        
      </div>
    </main>
  )
}

export default Home