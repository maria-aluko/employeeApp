import { calcYearsWorked } from '../../utilities/calcYearsWorked';
import Button from '../Button/Button';
import './EmployeeCard.css';
import { useState } from "react";
import departments from '../../utilities/departments';
import axios from 'axios';


const EmployeeCard = ({id, startDate, department, name, location, role, animal}) => {
  const [promoRole, setPromoRole] = useState(false);
  const [edit, setEdit] = useState(false);
  const [details, setDetails] = useState({department, location, role})

  const yearsWorked = calcYearsWorked(startDate);
  const probation = yearsWorked < 0.5;
  const anniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({...prevState, [name]: value}));
  };

  const saveChanges = async () => {
    try {
      await axios.put(`http://localhost:3001/employees/${id}`, details);
      setEdit(false);
    } catch (error) {
      console.error("Error updating employee data:", error);
    }
  };

  return (
    <>
      <div className={`card ${departments(details.department)}`}>  
        <div className="content">
          <p className="empName">
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
          
          <div className='subtle'>
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
            <p>Been here for
                {yearsWorked < 1 && <span> few months</span>}
                {yearsWorked > 1 && <span> {yearsWorked} years</span>}
            </p>
            <p>Animal: {animal}</p>
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
          <div>
            {probation && (
            <p className='promo'>
              <span>🎉</span> Schedule probation review
            </p>
            )}
          </div>
          <div>
            {anniversary && (
            <p className='promo'>
              <span>🎉</span> Schedule recognition meeting
            </p>
            )}
          </div>
        </div>
        <div>
          <img 
            src={`https://robohash.org/${id}?set=set5`}
            alt="Employee Picture" 
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;