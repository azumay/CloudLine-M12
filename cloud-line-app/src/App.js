import './App.css';
import React, { useState } from "react";
import NavegacioBar from './components/NavegacioBar/NavegacioBar';
import { urlsApp } from './constants/Rutas';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/Estils'
import Inici from './Vistes/Inici';

/*Vistas*/
import Doctor from './Vistes/Doctor';
import Vacuna from './Vistes/Vacuna';
import Medicamento from './Vistes/Medicamento';
import Revision from './Vistes/Revision';
import Cola from './Vistes/Cola';

/*Contextos*/
import DadesContext from "./context/DadesContext";


function App() {

  const [user, setUser] = useState() ;

 
  return (
    <DadesContext.Provider value={{user, setUser}}>
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavegacioBar titol="Cloud Line" >
         
            <Routes>
              <Route path={urlsApp.inici} element={<Inici />} />
              <Route path={urlsApp.citaVacuna} element={<Vacuna  />} />
              <Route path={urlsApp.citaDoctor} element={<Doctor  />} />
              <Route path={urlsApp.citaMedicamento} element={<Medicamento  />} />
              <Route path={urlsApp.citaRevision} element={<Revision  />} />
              <Route path={urlsApp.cola} element={<Cola  />} />
            </Routes>
         
        </NavegacioBar>
      </ThemeProvider>
    </div>
    </DadesContext.Provider>
  );
}

export default App;