import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'
import User from './pages/User'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard/*' element={<Dashboard />} >
          <Route path='welcome' element={<p>Desde sub ruta</p>} />
        </Route>
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
