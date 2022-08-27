import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
      <Link to="/" className="navbar-brand ml-5" > React Redux contact app</Link>
      <ul className='navbar-nav'>
              <li className='nav-item'>
                  <Link to="/" className='navbar-brand ml-5'>React contact app</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
