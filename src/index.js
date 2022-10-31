import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/index.scss'

import MainRouter from './routers/MainRouter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>    
  </React.StrictMode>
)