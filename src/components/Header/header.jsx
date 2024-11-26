import { NavLink, Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>
          <h1>Employee Dashboard</h1>
        </Link>
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