import './App.css'

import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
