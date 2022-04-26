import React, { useState,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Formulario,
  Boton,
  MensajeExito,
  MensajeError,
} from "./../components/Form/EstilosForm";

import Input from "./../components/Form/Input";

import DadesContext from "../context/DadesContext";

export default function Inici(props) {

  const navigate = useNavigate();

  const [formularioValido, cambiarFormularioValido] = useState(null);
  
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });

  const {user, setUser} = useContext(DadesContext);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /(6|7)[ -]*([0-9][ -]*){8}/,
  };

  const onSubmit = (e) => {
		e.preventDefault();
    
		if(

			nombre.valido === 'true' &&
      apellido.valido === 'true'&&
			telefono.valido === 'true' 
			
		){
     
         fetch("http://192.168.50.129:8080/users/cola", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Nombre: nombre.campo,
            Apellido: apellido.campo,
            Telefono: telefono.campo,
            Servicio: 'Doctor'
            
          }),
        });
        
     
      setUser(true);
      if (user){
        return navigate('/Cola', { replace: true });
      }
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
      cambiarApellido({campo: '', valido: null})
      cambiarTelefono({campo: '', valido: null});
			
	
		} else {
			cambiarFormularioValido(false);
		}
	}
 
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Cola para visita al doctor</h1>
   
      <Servicio img="doctor.png" titulo="Doctor" />
    <div className="mb-5">
      <Formulario action="" onSubmit={onSubmit}>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Jhon"
            name="Nombre"
            leyendaError="El nombre solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />
         
          <Input
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="text"
            label="Apellido"
            placeholder="Smith"
            name="Apellido"
            leyendaError="El apellido solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="tel"
            label="Telefono"
            placeholder="+34"
            name="telefono"
            leyendaError="Telefono no valido."
            expresionRegular={expresiones.telefono}
          />
           <Boton type="submit">Enviar</Boton>
        </Formulario>
      
      <Link to="/" className="button-62">Volver</Link>
      </div>
    </div>
    </div>
  );
}