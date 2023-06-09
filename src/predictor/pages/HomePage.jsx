import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import  plate from '../../assets/images/plate.png'

export const HomePage = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="text-center">
                <h1 className="mt-3">Bienvenidos al Predictor de Pico y Placa</h1>
                <h2>Prueba técnica para empresa REMECO</h2>
                <h3>Realizado por Nemecio Rodríguez</h3>
                <figure className="mt-5 mb-5">
                    <img src={plate} alt="imagen de placa EC" />
                </figure>

                <Link to="/newsearch" className="btn btn-primary">
                    Nueva consulta
                </Link>
            </div>
        </div>
    </>
  )
}
