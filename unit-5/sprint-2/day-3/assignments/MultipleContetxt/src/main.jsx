import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from "./context/ThemeProvider.jsx";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
)
