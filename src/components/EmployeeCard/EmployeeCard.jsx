import { calcYearsWorked } from '../../utilities/calcYearsWorked';
import Button from '../Button/Button';
//import './EmployeeCard.css';
import { useState } from "react";
import departments from '../../utilities/departments';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './EmployeeCard.module.css';

const EmployeeCard = ({id, startDate, department, name, location, role, animal, age}) => {
  const [promoRole, setPromoRole] = useState(false);
  const [edit, setEdit] = useState(false);
  const [details, setDetails] = useState({name, department, location, role, id, startDate, animal, age});
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const yearsWorked = calcYearsWorked(startDate);
  const probation = yearsWorked < 0.5;
  const anniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({...prevState, [name]: value}));
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      const updatedEmployee = {
        id: details.id,
        startDate: details.startDate,
        name: details.name,
        animal: details.animal,
        role: details.role,
        department: details.department,
        location: details.location,
        age: details.age,
      };

      await axios.patch(`https://employeeapp-data.onrender.com/employees/${id}`, updatedEmployee);
      setEdit(false);
      setLoading(false);
    } catch (error) {
      console.error("Error updating employee data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`${styles.card} ${styles[departments(details.department)]}`}>  
        <div className={styles.content}>
          <p className={styles.empName}>
            {name} {promoRole && <span>⭐</span>}
          </p>
          <div>
            {edit ? (
              <input 
                name='role'
                type='text'
                value={details.role}
                onChange={handleChange} />
            ) : (
              <p>{role} 
            {promoRole && <span> - Team Lead</span>}
            </p>
            )}
          </div>
          
          <div className={styles.subtle}>
            {edit ? (
              <input 
                name='department'
                type='text'
                value={details.department}
                onChange={handleChange} />
            ) : (
              <p>Department: {details.department}</p>
            )}

            <div>
              {edit ? (
                <input name='location' type='text' value={details.location} onChange={handleChange} />
              ) : (
                <p>Based in: {details.location}</p>
              )} 
            </div>
            
            <div className='smallTxt'>
            <p>Worked for
                {yearsWorked < 1 && <span> few months</span>}
                {yearsWorked > 1 && <span> {yearsWorked} years</span>}
            </p>
            </div>
          </div>
          
          <Button 
            onClick={() => setPromoRole((prevState) => !prevState)}
            text={promoRole ? "Demote" : "Promote"}
          />
          <Button
            onClick={() => (edit ? saveChanges() : setEdit(true))}
            text={edit ? "Save" : "Edit"}
          />
        </div>
        <div className={styles.secondContent}>
          <div>
            {probation ? (
              <p className={styles.promo}>
                <span>🎉</span> Probation
              </p>
            ) : anniversary ? (
              <p className={styles.promo}>
                <span>🎉</span> Recognition
              </p>
            ) : (
              <p className={styles.align}></p>
            )}
          </div>
          <img
            src={`https://robohash.org/${id}?set=set5`}
            alt="Employee Picture" 
          />
          <Button 
            text={'See More'}
            role={'secondary'}
            onClick={() => navigate(`/employees/${id}`)}
          />
          {loading && (
            <div className={styles.loadingDiv}>
              <div className={styles.spinner}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;