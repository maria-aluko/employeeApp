import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { calcYearsWorked } from "../utilities/calcYearsWorked";
import Button from "../components/Button/Button";
import styles from './SinglePage.module.css'

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
    <div className={styles.SPcontent}>
       <div className={styles.SPcard}>  
        <div className={styles.SPinfo}>
          <p className={styles.empName}>{employee.name}</p>
          <div className={styles.section}>
            <h4>Employment Details</h4>
            <p>ID: {employee.id}</p>
            <p>Employee Role: {employee.role}</p>
            <p>Department: {employee.department}</p>
            <p>Start Date: {employee.startDate}</p>
            <p>Employment Duration: {calcYearsWorked(employee.startDate)} years</p>
          </div>
          <div className={styles.section}>
            <h4>Contact Details</h4>
            <p>Email: {employee.email}</p>
            <p>Phone number: {employee.phone}</p>
          </div>
          <div className={styles.section}>
            <h4>Personal Details</h4>
            <p>Based in: {employee.location}</p>
            <p>Age: {employee.age}</p>
            <p>Favorite Animal: {employee.animal}</p>
          </div>
        </div>

        <div className={styles.SPsecond}>
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