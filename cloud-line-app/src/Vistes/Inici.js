import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";

export default function Inici(props) {
  const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Tria un servei</h1>
      <Servicio img="doctor.png" titulo="Cita médica" />
      <Servicio img="vacuna.webp" titulo="Vacunación" />
      <Servicio img="drugs.png" titulo="Medicación" />
      <Servicio img="stethoscope.png" titulo="Revisón médica" />
    </div>
    </div>
  );
}
