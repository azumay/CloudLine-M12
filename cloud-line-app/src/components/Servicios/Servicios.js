import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Servicio (props) {
    
    return(
        <div>
             <h3>{props.titulo}</h3>
            <img className="imgServei" src={"img-serveis/" + props.img}></img>
        </div>
    )
}