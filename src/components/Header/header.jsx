import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <header>
      <h1>Employee Dashboard</h1>
      <nav>
        <ul>          
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/employees'>List</NavLink></li>
          <li><NavLink to='/new'>Form</NavLink></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;