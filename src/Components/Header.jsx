import React from 'react'
import "./header.css"
import {NavLink} from "react-router-dom"



function Header() {
  return (
    <nav className='header-container'>
        <h1>Photographer</h1>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="about"><li>About</li></NavLink>
            <NavLink to="gallery"><li>Gallery</li></NavLink>
        </ul>
    </nav>
  )
}

export default Header