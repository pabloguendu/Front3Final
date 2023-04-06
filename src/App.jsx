
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/ApiContext";


function App() {
  return (
      <ContextProvider>
      <div className="App">
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
      </ContextProvider>
  );
}

export default App;
