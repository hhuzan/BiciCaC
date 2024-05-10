import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { MUIWrapper } from "./components/MUIWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import MyRoutes from "./router/MyRouters";
import Autenticador from "./utils/Autenticador";
import AutContext from "./utils/AutContex";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const autenticador = new Autenticador(setIsLoggedIn);

  return (
    <MUIWrapper>
      <CssBaseline />
      <AutContext.Provider value={autenticador}>
        <BrowserRouter>
          <MyRoutes isLoggedIn={isLoggedIn} />
        </BrowserRouter>
      </AutContext.Provider>
    </MUIWrapper>
  );
};

export default App;
