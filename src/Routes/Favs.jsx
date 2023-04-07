import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const datosLocalStorage = Object.entries(localStorage);
  let newArrayParseado=[]
  datosLocalStorage.map((value)=>{
    const pablovalue= value[1];
    const pabloValueJson=JSON.parse(pablovalue);
    newArrayParseado.push(pabloValueJson);


  })

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* {este componente debe consumir los destacados del localStorage}
        { Deberan renderizar una Card por cada uno de ellos} */}
        {datosLocalStorage.length && newArrayParseado.map((dentist) => (
        <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
