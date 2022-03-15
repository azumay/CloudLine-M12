
import { urlsApp } from './constants/Rutas';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './view/Inicio';
import ButtonAppBar from './components/AppBar/AppBar';

function App() {
  return (
    <div className="App">
     <ButtonAppBar />
     <Inicio />
         
  </div>
  );
}

export default App;
