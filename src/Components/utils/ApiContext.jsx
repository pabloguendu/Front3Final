import { createContext,useEffect,useState } from "react";

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  // const [dentistsId, setDentistsId] = useState([]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  };

  useEffect(() => {
    getDentists();
    // getDentistsId();
  } , [])


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};
