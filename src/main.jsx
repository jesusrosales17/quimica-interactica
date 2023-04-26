import React from 'react'
import ReactDOM from 'react-dom/client'
import PeriodicTableApp from './PeriodicTableApp'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
// import Cruzigrama from './Cruzigrama'
import { AhorcadoApp } from './components/ahorcado/AhorcadoApp'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)
