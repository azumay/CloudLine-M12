
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormCitaPrevia() {
    
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
      <input {...register("Nom", { required: true })} placeholder="Nom"/>
      <input {...register("Cognom", { required: true })} placeholder="Cognom"/>
      <input type="date" {...register("Data")} />
      <input type="time" {...register("Hora")} />

        <p>{data}</p>
        {errors.Nom && <p>⚠️ Ep, el Nom és obligatori!</p>}
        {errors.Cognom && <p>⚠️ Ep, el Cognom és obligatori!</p>}
        {errors.Data && <p>⚠️ Ep, la Data és obligatoria!</p>}
        {errors.Hora && <p>⚠️ Ep, la Hora és obligatoria!</p>}

        <input type="submit" />
      </form>
      </div>
    );
  }
