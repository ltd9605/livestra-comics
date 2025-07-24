import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img src="src/assets/img/bgr.gif" className="background-image" alt="background"></img>
    <App />
  </StrictMode>
)
