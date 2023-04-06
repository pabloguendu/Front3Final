import { createContext } from "react";

const response =()=> await fetch('https://myapi.com/users');
const data = await response.json();
return data;
export const initialState = {theme: "", data: []}


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
