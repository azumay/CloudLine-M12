import React from "react";

export default function Horario() {
  var hoy = new Date();
  
  var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

  const dia = hoy.getDay();

  return (
    <div className="horario">
      <div class={hora <= "19:30" ?"alert alert-primary" : "alert alert-danger" } role="alert">
        Lunes-Viernes 8:00-19:30
      </div>
      {hora <= "19:30" && dia <= 5 ? (
        <p className=" abierto ">Abierto 🟢</p>) : 
        dia < 5 ?  
        (<p className=" cerrado ">Cerrado 🔴 <br/> Volvemos mañana!</p>) :
        (<p className=" cerrado ">Cerrado 🔴 <br/> Volvemos el lunes!</p>)
      
      }
      <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=medium&timezone=Europe%2FMadrid"></iframe>
    </div>
  );
}
