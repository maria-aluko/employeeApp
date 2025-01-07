import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Something went wrong, try again?</h2>
      <Button 
        onClick={() => navigate('/')}
        text={'Go back Home'}
      />
    </div>
  )
}

export default ErrorPage;