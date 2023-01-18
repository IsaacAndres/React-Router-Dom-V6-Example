import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
        <h1>Dashboard</h1>

        <button onClick={handleClick}>
            Logout
        </button>

        <Link to='welcome'>
          <p>Ir a sub ruta</p>
        </Link>

        <Outlet />
    </div>
  )
}

export default Dashboard