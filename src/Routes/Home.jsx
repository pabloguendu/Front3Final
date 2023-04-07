import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/ApiContext';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state}=useContext(ContextGlobal);
  const {dentists}=useContext(ContextGlobal);
  function getDentistsId (id){
    console.alert("Acá")
    localStorage.setItem(id,JSON.stringify(dentists[id-1]));  
  }


  return (
    <>
    <div className={ state.darkMode ?'':'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length && dentists.map((dentist) => (
        <div className='card'>
          <Link key={dentist.id} className='link-text-decoration' to={`/detail/${dentist.id}`}>
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}> 
          </Card>
          </Link>
          <button onClick={() => getDentistsId(dentist.id)}>Add fav</button>
        </div>

        ))}
        
      </div>
    </div>
  </>
  )
}

export default Home