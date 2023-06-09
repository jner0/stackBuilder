import { Navbar } from "../components/Navbar"

import { useForm } from "react-hook-form";

export const PredictorPage = () => {

    const { register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <>
        <Navbar/>

        <section className="container mt-5">
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label className="form-label mt-2">License plate</label>
                <input
                    className="form-control my-2"
                    {...register("placa", {
                        required: true,
                        pattern: /^[a-zA-Z]{3}-\d{3}\d{0,1}$/
                    })}
                    aria-invalid={errors.placa ? "true" : "false"}
                />
                {errors.placa?.type === 'required' && <p className=" text-danger small">License plate is required</p>}
                {errors.placa?.type === 'pattern' && <p className=" text-danger small">Ejemplo de Formato Correcto: AAA-1234</p>}

                <label className="form-label mt-2">Date</label>
                <input
                    type="date"
                    className="form-control my-2"
                    {...register("fecha")}
                />

                
                <label className="form-label mt-2">Time</label>
                <input
                    type="time"
                    className="form-control my-2"
                    {...register("hora")}
                />

                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </section>
    </>
  )
}
