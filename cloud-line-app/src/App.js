import './App.css';
import React, { useState } from "react";
import NavegacioBar from './components/NavegacioBar/NavegacioBar';
import { urlsApp } from './constants/Rutas';
import { Navigate,Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/Estils'
import Inici from './Vistes/Inici';

/*Vistas*/
import Doctor from './Vistes/Doctor';
import Vacuna from './Vistes/Vacuna';
import Medicamento from './Vistes/Medicamento';
import Revision from './Vistes/Revision';
import Cola from './Vistes/Cola';
import AdminCola from './Vistes/AdminCola';
import Login from './Vistes/Login';

/*Contextos*/
import UserContext from "./context/UserContext";
import DadesContext from './context/DadesContext';


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [tiquet, setTiquet] = useState();
  
 
  return (
    <UserContext.Provider value={{user, setUser}}>
      <DadesContext.Provider value={{tiquet, setTiquet}}>
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavegacioBar titol="Cloud Line" >
         
            <Routes>
              <Route path={urlsApp.inici} element={<Inici />} />
              <Route path={urlsApp.citaVacuna} element={<Vacuna  />} />
              <Route path={urlsApp.citaDoctor} element={<Doctor  />} />
              <Route path={urlsApp.citaMedicamento} element={<Medicamento  />} />
              <Route path={urlsApp.citaRevision} element={<Revision  />} />

              <Route path={urlsApp.login} element={!user ? (<Login />) : (<Navigate replace to="/AdminCola" />)}/>
              <Route path={urlsApp.cola} element={ <Cola  /> } />
              <Route path={urlsApp.adminCola} element={user ? (<AdminCola />) : (<Navigate replace to="/Login" />)}/>

            </Routes>
         
        </NavegacioBar>
      </ThemeProvider>
    </div>
    </DadesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;