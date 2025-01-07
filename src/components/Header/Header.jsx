import { NavLink, Link } from "react-router-dom";
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link to='/'>
          <h1>Employee Dashboard</h1>
        </Link>
        <ul>          
          <li><NavLink to='/'>Log In</NavLink></li>
          <li><NavLink to='/employees'>Employees</NavLink></li>
          <li><NavLink to='/new'>Add New</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
