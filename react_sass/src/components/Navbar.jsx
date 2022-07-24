import { NavLink } from "react-router-dom";
import "../styles/components/navbar.sass"

import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <h1>Alan Moreira</h1>
        <ul>
            <li>
                <NavLink to="portfolio-deploy/" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="portfolio-deploy/projects" >
                    Projetos
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar