import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth } from './contexts/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth>,
)
