import React from 'react'
import { NavLink} from "react-router-dom"

 function Navigation() {
   
  return (
   <nav className='nav'>
    <div>
      <img  className="nav-img" src="/Emage/download-logo.png"></img>
    </div>
    <ul className='nav-ul' >
      <nav>
      <NavLink to="/"><li>Home</li> </NavLink>
      <NavLink to="/about"><li>About</li> </NavLink>
      {/* <NavLink to="/contect"><li>Contect</li> </NavLink> */}
      </nav>
    </ul>

   </nav>
  )
}
export default Navigation;
