import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import CardDetails from "../Components/CardDetails";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [getDetails,setDetails] =useState("")
  const {id}  = useParams();
  console.log()
  
  const getDetailsAll = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json();
    setDetails(data)
    console.log(getDetails)

  };
  
  useEffect(() => {
    getDetailsAll(id);
  } , [])
  return (
    <>
    <CardDetails name={getDetails.name} email={getDetails.email} phone={getDetails.phone} webSite={getDetails.website}/>
    </>
  )
}

export default Detail