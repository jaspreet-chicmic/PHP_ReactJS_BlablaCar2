import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./View/Navbar.js/index.js";
import { useSelector } from "react-redux";
import Loader from "./Components/Atoms/Loader";
import RootRouter from "./Route/RootRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Loader />
        <Navbar />
        <div className="main">
          {/* <PublicRoutes /> */}
          <RootRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
