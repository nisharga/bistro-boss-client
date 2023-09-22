import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <HelmetProvider>
      <AuthProviders>
        <App />
      </AuthProviders>
    </HelmetProvider>
    
  </React.StrictMode>,
)
