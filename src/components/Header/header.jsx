import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
      <h1>Employee Dashboard</h1>
        <ul>          
          <li><NavLink to='/login'>Log In</NavLink></li>
          <li><NavLink to='/employees'>Employees</NavLink></li>
          <li><NavLink to='/new'>Add New</NavLink></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;