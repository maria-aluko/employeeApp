import { RouterProvider } from 'react-router-dom';
import { router } from './routes/appRoutes';
import './App.css';
import Footer from './components/Footer/footer'
import Header from './components/Header/Header'
import { useState } from 'react'
import Button from './components/Button/Button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInFunction = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
        />

      <div>
        <main>
          {
            isLoggedIn? (
              <div>
              <Button onClick={logInFunction} className='logoutBtn' text='Log Out' />
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