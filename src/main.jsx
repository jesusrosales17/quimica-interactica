import React from 'react'
import ReactDOM from 'react-dom/client'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)

