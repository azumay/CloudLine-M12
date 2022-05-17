import './App.css';

import NavegacioBar from './components/NavegacioBar/NavegacioBar';
import Contacte from './Vistes/Contacte';
import Preus from './Vistes/Preus';
import Serveis from './Vistes/Serveis';
import AboutUs from './Vistes/AboutUs';
import { urlsApp } from './constants/Rutas';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/Estils'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CampaignIcon from '@mui/icons-material/Campaign';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BallotIcon from '@mui/icons-material/Ballot';
import InfoIcon from '@mui/icons-material/Info';
import Inici from './Vistes/Inici';
import NavegacioBarVista from './Vistes/NavegacioBarVista';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const elementsProba = [
  {
    nom: "Inicio",
    icona: <CampaignIcon />,
    redireccio: urlsApp.inici
  }, {
    nom: "divider"
  }, {
    nom: "Contacte",
    icona: <ClearAllIcon />,
    redireccio: urlsApp.contacte
  }, {
    nom: "Login",
    icona: <LockOpenIcon />,
    redireccio: urlsApp.login
  }, {
    nom: "Serveis",
    icona: <BallotIcon />,
    redireccio: urlsApp.serveis
  }, {
    nom: "Sobre nosaltres",
    icona: <InfoIcon />,
    redireccio: urlsApp.AboutUs
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
              <Route path={urlsApp.contacte} element={<Contacte />} />
              <Route path={urlsApp.preus} element={<Preus />} />
              <Route path={urlsApp.serveis} element={<Serveis />} />
              <Route path={urlsApp.AboutUs} element={<AboutUs />} />
            </Routes>
          </Container>
        </NavegacioBar>      
      </ThemeProvider>
    </div>
  );
}

export default App;
