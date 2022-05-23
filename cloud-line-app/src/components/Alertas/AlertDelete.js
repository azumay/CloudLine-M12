import React from 'react';
import swal from 'sweetalert';

export default function AlertDelete (id, persona, postData, confirmacio){
    
    swal({
        title: "Atención:",
        text: `Quieres eliminar de la cola a ${persona} con el num: ${id} ?`,
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta=>{
        if(respuesta){
            swal({
                title: `Tiquet con num: ${id}`,
                text: "Se ha eliminado correctamente",
                icon: "success",
                button: "Acceptar",
                timer: "3000"

            })
          postData(confirmacio);
    
        }
    });
}