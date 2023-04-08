
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/ApiContext";


function App() {
  return (
      <div className="App">
      <ContextProvider>
          <Navbar/>
          <Outlet />
          <Footer/>
      </ContextProvider>
      </div>
  );
}

export default App;
