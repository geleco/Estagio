import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './pages/sidebar/components/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Sidebar/>
  </StrictMode>,
)
