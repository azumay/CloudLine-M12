import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import DadesContext from "../context/DadesContext";

export default function Inici(props) {

  const [tiquet, setTiquet] = useState(JSON.parse(localStorage.getItem('tiquet')));
  const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Elige un servicio</h1>
        <div className="col-md-6  col-lg-3 mb-5">
        <Link to="/CitaVacuna">
          <Servicio img="vacuna.webp" titulo="Vacunación" />
        </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5">
        <Link to="/CitaDoctor">
          <Servicio img="doctor.png" titulo="Cita médica" />
        </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5">
        <Link to="/CitaMedicamento">
          <Servicio img="drugs.png" titulo="Medicación" />
        </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5">
        <Link to="/CitaRevision">
          <Servicio img="stethoscope.png" titulo="Revisón médica" />
        </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" style={!tiquet ? {display: 'none'} : {}}>
        <Link to="/Cola">
          <Servicio img="queue.png" titulo="Cola  " />
        </Link>
        </div>
      </div>
    </div>
  );
}
