import { useEffect, useState } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import styles from './EmployeeList.module.css'

const EmployeeList = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
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

/*
{teachers.map((teacher) => {
  return <EmployeeCard
    name={teacher.name}
    initRole={teacher.role}
    department={teacher.department}
    startDate={teacher.startDate}
    location={teacher.location}
    age={teacher.age}
    animal={teacher.animal}
    key={teacher.id}
*/