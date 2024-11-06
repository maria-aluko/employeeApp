import './App.css';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInFunction = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <div>
        <Header/>
        <main>
          {
            isLoggedIn? (
              <div>
              <button onClick={logInFunction}>Log Out </button>
              <EmployeeList/>
              </div>
            ) : (
              <div>
                <p>Please log in to see the list</p>
                <button onClick={logInFunction}>Log In</button>
              </div>
            )
          }
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App;