import './App.css';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { useState } from 'react'
import Button from './components/Button/Button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInFunction = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  
  return (
    <>
      <div>
        <Header/>
        <main>
          {
            isLoggedIn? (
              <div>
              <Button onClick={logInFunction} className='logoutBtn' text='Log Out' />
              <EmployeeList/>
              </div>
            ) : (
              <div>
                <p>Please log in to see the list</p>
                <Button onClick={logInFunction} className='loginBtn' text='Log In' />
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