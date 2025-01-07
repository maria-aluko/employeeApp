import { useEffect, useState } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import styles from './EmployeeList.module.css'

const EmployeeList = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://hr-app-aluko.vercel.app/api/mock-backend/employees")
    .then((response) => response.json())
    .then((data) => {
      setPersons(data);
      setIsLoading(false);
    })
  }, []);


  return (
    <div className={styles.list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        persons.map((employee) => {
          return <EmployeeCard key = {employee.id} {...employee}/>
            })
      )}
    </div>
  );
};

export default EmployeeList;