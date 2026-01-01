import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Example1 from './Example1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Example1/>
  </StrictMode>,
)
