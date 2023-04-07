import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/ApiContext";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const {state}=useContext(ContextGlobal);
  const datosLocalStorage = Object.entries(localStorage);
  let newArrayParseado=[]
  datosLocalStorage.map((value)=>{
    const tranformValue= value[1];
    const tranformJson=JSON.parse(tranformValue);
    newArrayParseado.push(tranformJson);
  })


  return (
    <div className = { state.darkMode? '':'card-favorite dark'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* {este componente debe consumir los destacados del localStorage}
        { Deberan renderizar una Card por cada uno de ellos} */}
          {newArrayParseado.length && newArrayParseado.map((dentist) => (
        <div className="card">
          <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
        </div>
          ))}
        </div>

    </div>
  );
};

export default Favs;
