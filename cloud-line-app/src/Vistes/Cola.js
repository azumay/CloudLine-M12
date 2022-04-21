import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    const [data, setData] = useState([]);

        const columnsCola = [
          {
            field: "_id",
            headerName: "id",
            width: 250,
            editable: false,
          },
          {
            field: "Nombre",
            headerName: "Nombre",
            width: 200,
            editable: false,
          },
          {
            field: "Apellido",
            headerName: "Apellido",
            width: 200,
            editable: false,
          },
          {
            field: "Telefono",
            headerName: "Telefono",
            width: 200,
            editable: false,
          },
          {
            field: "Servicio",
            headerName: "Servicio",
            width: 200,
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
                //console.log(response);
                return response.json();
              })
              .then(function (myJson) {
                //console.log(myJson);
                setData(myJson.datosUser);
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
   
     
        <div className="mb-5">

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