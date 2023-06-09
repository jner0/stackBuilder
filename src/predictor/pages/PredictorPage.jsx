import { Navbar } from "../components/Navbar"

import { useForm } from "react-hook-form";

export const PredictorPage = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <>
        <Navbar/>

        <section className="container mt-5">
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label className="form-label mt-2">Número de placa</label>
                <input
                    className="form-control my-2"
                    {...register("placa")}
                />
                <label className="form-label mt-2">Fecha</label>
                <input
                    type="date"
                    className="form-control my-2"
                    {...register("fecha")}
                />
                <label className="form-label mt-2">Hora</label>
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
