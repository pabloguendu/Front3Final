import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/ApiContext';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state, dentists}=useContext(ContextGlobal);
  function getDentistsId (id){
    alert("Si la card ya estaba en favoritos, no se podrá cargar nuevamente, de lo contrario si")
    localStorage.setItem(id,JSON.stringify(dentists[id-1]));  
  }


  return (
    <>
    <div className={ state.darkMode ?'white':'dark'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length && dentists.map((dentist) => (
        <div key={dentist.id} className={ state.darkMode ?'card white':' card dark'}>
          <Link className='link-text-decoration' to={`/detail/${dentist.id}`}>
          <Card name={dentist.name} username={dentist.username} id={dentist.id}> 
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