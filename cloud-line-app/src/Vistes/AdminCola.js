import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import UserContext from "../context/UserContext";

/* ALERTAS */
import AlertDelete from "./../components/Alertas/AlertDelete";

/* DATAGRID - MUI*/
import DataGridMui from "./../components/DataGridMui/DataGridMui";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";

/*ICONOS*/
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminCola(props) {

  
  const {user, setUser} = useContext(UserContext);

  const logout = () => {
    setUser(false); //Cambiamos el estado del conexto User para redirigir
    LocalStorageUser.removeItem('user'); //Borramos el localStorage con los datos del login 
    
  }
  
  const [data, setData] = useState([]);

  const [id, setId] = useState("");
  const [numTiquet, setNumTiquet] = useState("");
  const [nombrePersona, setNombrePersona] = useState("");


  const [dataOriginal, setDataOriginal]  = useState(setData);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);


  //Constante con el local Storage
  const LocalStorageUser = window.localStorage;
  
  //Asignamos los valores del State User
  LocalStorageUser.setItem('user', JSON.stringify(user)); 

  useEffect(() => {
    selectID();
  }, [selectedRows]);


  //Funcion para almacenar el id del row que hemos seleccionado en la tabla
  function selectID() {
    var row;
    row = selectedRows[0];

    if (selectedRows.length > 0) {
      setId(row._id);
      setNumTiquet(row.Tiquet)
      setNombrePersona(row.Nombre);
    } else {
      setId("");
      setNumTiquet("");
      setNombrePersona("");
    }
  }

 

  function CustomToolbar(props) {
    return (
      <GridToolbarContainer {...props} className="customToolBar">
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
        <Button
          variant="contained"
          type="submit"
          startIcon={<DeleteIcon />}
          //onClick={() => postData()}
          onClick={() => AlertDelete(numTiquet, nombrePersona, postData, "eliminar")}
          size="small"
          color="error"
        >
          Eliminar
        </Button>
      </GridToolbarContainer>
    );
  }


  const columnsCola = [
    {
      field: "Tiquet",
      headerName: "N?? Tiquet",
      width: 100,
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
      headerName: "Tel??fono",
      width: 200,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "Hora llegada",
      width: 250,
      editable: false,
    },
    {
      field: "Servicio",
      headerName: "Servicio",
      width: 200,
      editable: false,
    },
  ];

  /* Metodo POST para actualizar datos de la cola */
  const postData = async () => {
    await fetch("http://192.168.50.129:8080/users/remove", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then(function (response) {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch((error) => {
        console.log("error " + error.message);
      });
      getData();
  };
  /* Metodo GET para obtener datos de la cola */
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


  return (
    <div className="container">
      <div className="row">
     
       
       </div>
        <h1 className="mb-5">Administrar cola</h1>

        <div className="mb-5">
          <DataGridMui
            components={{ Toolbar: CustomToolbar }}
            data={data}
            col={columnsCola}
            rowId={(row) => row._id}
            //////
            selectionModel={selectionModel}
            onSelectionModelChange={(selection) => {
              const newSelectionModel = selection;
              const selectedIDs = new Set(selection);
              
              if (newSelectionModel.length > 1) {
                const getSelectedRows = data.filter((row) =>
                  selectedIDs.has(row._id)
                );

                const selectionSet = new Set(selectionModel);

                const result = newSelectionModel.filter(
                  (s) => !selectionSet.has(s)
                );

                setSelectionModel(result); // Aqu?? hacemos el cambio del checkbox del Row

                const newRow = new Set(result);

                const rowNuevo = data.filter((row) => newRow.has(row._id));

                setSelectedRows(rowNuevo); // Aqu?? asignamos los valores nuevos al Modal
              } else {
                const getSelectedRows = data.filter((row) =>
                  selectedIDs.has(row._id)
                );

                if (newSelectionModel.length < 1) {
                  setSelectedRows(getSelectedRows);
                  setSelectionModel(newSelectionModel);
                } else {
                  setSelectedRows(getSelectedRows);
                  setSelectionModel(newSelectionModel);
                }

                //setSelectionModel = new Set();
              }
            }}
          />
        </div>
        <Button 
        variant="outlined" 
        color="error"
        startIcon={<LogoutIcon />}
        onClick={() => logout()}
      
        >
          Salir
      </Button>
      </div>
    
  );
}
