import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import FormCitaPrevia from "./../components/Form/Form";
export default function Inici(props) {
  const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Pedir hora para vacunarse</h1>
   
      <Servicio img="vacuna.webp" titulo="Vacunación" />
      <FormCitaPrevia/>
        <Link to="/">Volver</Link>
    </div>
    </div>
  );
}