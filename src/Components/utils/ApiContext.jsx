import { createContext,useEffect,useState } from "react";
import { useReducer } from "react";

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return { ...state, darkMode: !state.darkMode };
      default:
        return state.darkMode;
    }
  };

  useEffect(() => {
    getDentists();
  } , [])
  const [state, dispatch] = useReducer(reducer, { darkMode: false });

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{dentists, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
