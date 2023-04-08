import React from "react";

const Card = ({ name, email,phone, webSite }) => {
    // Aqui iria la logica para agregar la Card en el localStorage
      
  return (
    <div className="container-details">
    <div className="card cardDetails">
      <img src="../images/doctor.jpg" className="card-img-top" alt="doctor"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Email: {email}</p>
      <p className="card-text">Phone: {phone}</p>
      <p className="card-text">WebSite: {webSite}</p>
    </div>
    </div>
    </div>
  );
};

export default Card;