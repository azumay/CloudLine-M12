import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";

export default function Inici(props) {
 
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Pedir hora para Revisión Médica</h1>
   
      <Servicio img="stethoscope.png" titulo="Revisón médica" />
      <Link to="/">Volver</Link>
      
    </div>
    </div>
  );
}