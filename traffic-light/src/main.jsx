import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './TrafficLight'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
