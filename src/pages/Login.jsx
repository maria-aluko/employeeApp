import { useState } from "react";
import Button from "../components/Button/Button";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div>
      <h2>{isLoggedIn ? 'You are logged in' : 'Please log in to access the Employee Database'}</h2>
      <Button
        onClick={toggleLogin}
        text={isLoggedIn ? 'Log Out' : 'Log In'}
      >
      </Button>

    </div>
  )
}

export default Login;