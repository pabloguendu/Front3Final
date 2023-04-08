import React from "react";

const Card = ({ name, username, id }) => {
    // Aqui iria la logica para agregar la Card en el localStorage
      
  return (
    <div>
      <img src="../images/doctor.jpg" className="card-img-top" alt="doctor"/>
    <div className="card-body">
      <h5 className="card-title">{id} - {name}</h5>
      <p className="card-text">{username}</p>
    </div>
    </div>
  );
};

export default Card;
