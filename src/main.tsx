import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContactsProvider } from './Context/ContactsProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
      <ContactsProvider>
        <App />
      </ContactsProvider>
  
  </React.StrictMode>,
)
