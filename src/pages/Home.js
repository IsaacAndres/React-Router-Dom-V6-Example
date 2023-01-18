import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/about">Acerca de</Link>
    </div>
  )
}

export default Home