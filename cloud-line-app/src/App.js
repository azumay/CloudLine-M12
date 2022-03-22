import './App.css';

import NavegacioBar from './components/NavegacioBar/NavegacioBar';
import { urlsApp } from './constants/Rutas';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/Estils'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Inici from './Vistes/Inici';
import NavegacioBarVista from './Vistes/NavegacioBarVista';
import Container from '@mui/material/Container';

const elementsProba = [
  {
    nom: "Inicio",
    icona: <HomeIcon />,
    redireccio: urlsApp.inici
  }, {
    nom: "divider"
  }, {
    nom: "Barra de navegación",
    icona: <ClearAllIcon />,
    redireccio: urlsApp.barraNavegacio
  }, {
    nom: "Login",
    icona: <LockOpenIcon />,
    redireccio: urlsApp.login
  },
];

const elementLogin =
{
  titol: "Iniciar Sessió",
  avatar: <LockOutlinedIcon />,
  redireccio: urlsApp.login
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavegacioBar elementsMenu={elementsProba} titol="Cloud Line" >
          <Container fixed>
            <Routes>
              <Route path={urlsApp.inici} element={<Inici />} />
              <Route path={urlsApp.barraNavegacio} element={<NavegacioBarVista />} />
              <Route path={urlsApp.login} element={<Login elementsLogin={elementLogin} />} />
            </Routes>
          </Container>
        </NavegacioBar>
      </ThemeProvider>
    </div>
  );
}

export default App;