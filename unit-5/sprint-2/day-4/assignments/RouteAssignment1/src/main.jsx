import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './Components/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </BrowserRouter> 
)