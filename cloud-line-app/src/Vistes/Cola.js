import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from "react-qr-code";

import DadesContext from "../context/DadesContext";

import { Link } from "react-router-dom";
import DataGridMui from "./../components/DataGridMui/DataGridMui";

export default function Cola(props) {

/*
                "_id": "624c965ff8b62ea4ab54f6ec",
                "Nombre": "Xavi",
                "Apellido": "Yamuza",
                "Telefono": "605251709",
                "Servicio": "Vacunacion",
                "createdAt": "2022-04-05T19:19:59.071Z",
                "updatedAt": "2022-04-05T19:19:59.071Z",
                "__v": 0
*/
    const [data, setData] = useState();

    const {tiquet, setTiquet} = useContext(DadesContext);

        const columnsCola = [
          {
            field: "Tiquet",
            headerName: "Nº Tiquet",
            width: 350,
            editable: false,
          },
          {
            field: "Nombre",
            headerName: "Nombre",
            width: 350,
            editable: false,
          },
          {
            field: "Servicio",
            headerName: "Servicio",
            width: 450,
            editable: false,
          },
        ];

        const getData = async () => {
            await fetch("http://192.168.50.129:8080/users/getcola", {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
              .then(function (response) {
                if (!response.ok) throw Error(response.status);
                return response.json();
              })
              .then(function (myJson) {
                setData(myJson[0].datosUser);
              })
              .catch((error) => {
                console.log(error.message);
              });
          };
    
    useEffect(() => {
            getData();
          }, []);
          
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Cola de espera</h1>
   
     
        <div className="mb-5 cola-user">
          <div id="box-qr">
            <QRCode 
            value={tiquet} 
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#6785c1"}
            />
          </div>
        <h1>{tiquet}</h1>
        <DataGridMui
        data={data}
        col={columnsCola}
        rowId={(row) => row.createdAt}
        />
        
      </div>
      <Link to="/" className="button-62">Volver</Link>
    </div>
    </div>
  );
}