import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { calcYearsWorked } from "../utilities/calcYearsWorked";
import Button from "../components/Button/Button";
import './SinglePage.css'

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  let years;

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        const foundEmp = data.employees.find((e) => e.id === id);
        setEmployee(foundEmp);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
  }, [id]);

  if (employee === null) {
    return <p>Loading...</p>
  }

  return (
    <div className="SPcontent">
       <div className='SPcard'>  
        <div className="content">
          <p className="empName">{employee.name}</p>
          <p>ID: {employee.id}</p>
          <p>Employee Role: {employee.role}</p>
          <p>Department: {employee.department}</p>
          <p>Based in: {employee.location}</p>
          <p>Age: {employee.age}</p>
          <p>Start Date: {employee.startDate}</p>
          <p>Employment Duration: {calcYearsWorked(employee.startDate)} years</p>
          <p>Favorite Animal: {employee.animal}</p>
        </div>

        <div className='secondContent'>
          <img
            src={`https://robohash.org/${id}?set=set5`}
            alt="Employee Picture" 
          />
        </div>

      </div>

      <Button text="Back to List" onClick={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;