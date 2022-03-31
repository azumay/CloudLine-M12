
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormCitaPrevia(props) {
    
    const [data, setData] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
  
    return (
        <div className="containerForm">
      <form className="formCitaPrevia" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input 
        {...register("Nom", 
        { required: true }
        )} 
        placeholder="Nom"/>

      <input 
        {...register("Cognom", 
        { required: true 
        })} 
        placeholder="Cognom"/>
      
      <input 
        {...register("Telefon", 
        { required: true 
        })} 
        placeholder="Telefon"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      
      <input 
        {...register("Servei",
        )} 
        value={props.servei} 
        type="hidden"/>

        <p>{data}</p>
        {errors.Nom && <p>⚠️ Ep, el Nom és obligatori!</p>}
        {errors.Cognom && <p>⚠️ Ep, el Cognom és obligatori!</p>}
        {errors.Telefon && <p>⚠️ Ep, el Telefon és obligatori!</p>}
     

        <input type="submit" value="Següent"/>

      </form>
      </div>
    );
  }
