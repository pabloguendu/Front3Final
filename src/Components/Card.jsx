import React, { useContext, useState } from "react";
import { ContextGlobal } from './utils/ApiContext';

const Card = ({ name, username, id }) => {
  const {dentists}=useContext(ContextGlobal);
  const [getDentistsFav,setDentistsFav]=useState([""])

    // Aqui iria la logica para agregar la Card en el localStorage
      function getDentistsId (id){
        localStorage.setItem(id,JSON.stringify(dentists[id-1]));
       
      }
      
    


  return (
    <div className="card">
      <img src="../images/doctor.jpg" class="card-img-top" alt="doctor"/>
    <div className="card-body">
      <h5 className="card-title">{id} - {name}</h5>
      <p className="card-text">{username}</p>
    </div>
    <button onClick={()=>getDentistsId(id)}>Add fav</button>
    </div>
  );
};

export default Card;
