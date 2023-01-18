import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/about">Acerca de</NavLink>
            </li>
            <li>
                <NavLink to="/Dashboard">Panel</NavLink>
            </li>            
            <li>
                <NavLink to="/user/10">Usuarios</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar