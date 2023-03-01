import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-auth-kit'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider authType = {'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={false}>
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  </AuthProvider>
)
