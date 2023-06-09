import { Route, Routes } from "react-router-dom"
import { HomePage } from "../predictor/pages/HomePage"
import { PredictorPage } from "../predictor/pages/PredictorPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <HomePage/>}/>
        <Route path="/newsearch/" element={ <PredictorPage/>}/>
    </Routes>
  )
}
