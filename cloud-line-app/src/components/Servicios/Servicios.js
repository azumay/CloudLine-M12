import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Servicio (props) {
    
    return(
        <div className="col-md-6 mb-5">
             <h3>{props.titulo}</h3>
            <img className="imgServei" src={"img-serveis/" + props.img}></img>
        </div>
    )
}