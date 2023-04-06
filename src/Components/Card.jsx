import React, { useContext } from "react";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src="../images/doctor.jpg" class="card-img-top" alt="doctor"/>
    <div className="card-body">
      <h5 className="card-title">{id} - {name}</h5>
      <p className="card-text">{username}</p>
    </div>
    <button>Add fav</button>
    </div>
  );
};

export default Card;
