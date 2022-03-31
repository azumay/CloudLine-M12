import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Servicio (props) {
    
    return(
        <div>
            <img className="imgServei" src={"img-serveis/" + props.img}></img>
            <h3 className="button-63">{props.titulo}</h3>
        </div>
    )
}