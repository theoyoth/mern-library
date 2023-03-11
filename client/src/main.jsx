import React from 'react'
import ReactDOM from 'react-dom/client'
// import auth
import { AuthProvider } from 'react-auth-kit'
// import react-query
import { QueryClientProvider,QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// import components
import App from './App'
// import css
import './index.css'

// initialize query client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider authType = {'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={false}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </React.StrictMode>,
  </AuthProvider>
)
