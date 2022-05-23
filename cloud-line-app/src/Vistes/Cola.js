import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from "react-qr-code";

/* ICONOS */
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

/* CONEXTOS */
import DadesContext from "../context/DadesContext";

import DataGridMui from "./../components/DataGridMui/DataGridMui";

import { useNavigate } from "react-router-dom";

export default function Cola(props) {
  const navigate = useNavigate();

  /*
                "_id": "624c965ff8b62ea4ab54f6ec",
                "Nombre": "Xavi",
                "Apellido": "Yamuza",
                "Telefono": "605251709",
                "Tiquet": "1",
                "Servicio": "Vacunacion",
                "createdAt": "2022-04-05T19:19:59.071Z",
                "updatedAt": "2022-04-05T19:19:59.071Z",
                "__v": 0
*/
  const [data, setData] = useState();

  const { tiquet, setTiquet } = useContext(DadesContext);

  //Constante con el local Storage
  const LocalStorageTiquet = window.localStorage;

  LocalStorageTiquet.setItem("tiquet", JSON.stringify(tiquet));

  const columnsCola = [
    {
      field: "Tiquet",
      headerName: "Nº Tiquet",
      width: 100,
      editable: false,
    },
    {
      field: "Servicio",
      headerName: "Servicio",
      width: 150,
      editable: false,
    },
  ];

  //Fetch para obtener los usuarios de la Cola
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

  //Cada 6 segundos resfrecamos la tabla
  useEffect(() => {
    setInterval(() => {
      getData();
    }, 3000);
  }, []);

  const dejarCola = () => {
    setTiquet(null);
    LocalStorageTiquet.removeItem("tiquet"); //Borramos el localStorage
    return navigate("/", { replace: true });
  };
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
            <h3>{tiquet}</h3>
            <p class="alert alert-warning">
              <em>1 Tiquet simultáneo por persona</em>
              </p>

            <Button
              variant="contained"
              type="submit"
              startIcon={<DeleteIcon />}
              onClick={() => dejarCola()}
              size="small"
              color="error"
            >
              Tirar tiquet
            </Button>
          </div>
 
          <div className="cola-normal">
            <DataGridMui
              data={data}
              col={columnsCola}
              rowId={(row) => row.createdAt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
