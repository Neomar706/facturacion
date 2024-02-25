import React from 'react'
import ReactDOM from 'react-dom/client'
import { Input, Ripple, initMDB } from 'mdb-ui-kit'
import App from './App.jsx'
import './assets/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css';

initMDB({ Input, Ripple }); 

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<App />)