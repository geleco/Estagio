import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './pages/navbar/components/index.jsx'
import Sidebar from './pages/sidebar/components/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Sidebar/>
  </StrictMode>,
)
