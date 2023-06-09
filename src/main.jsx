import React from 'react'
import ReactDOM from 'react-dom/client'
import { PredictorApp } from './PredictorApp.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PredictorApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
