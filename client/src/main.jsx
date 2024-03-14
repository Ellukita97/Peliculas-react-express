import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/AppPage/App'
import './index.css'
import Navbar from './components/Page/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
)
