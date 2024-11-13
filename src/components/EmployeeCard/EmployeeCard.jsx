import { calcYearsWorked } from '../../others/calcYearsWorked';
import Button from '../Button/Button';
import './EmployeeCard.css';
import { useState } from "react";


const EmployeeCard = ({id, startDate, department, name, location, role, animal}) => {
  const [promoRole, setPromoRole] = useState(false);

  const yearsWorked = calcYearsWorked(startDate);
  const probation = yearsWorked < 0.5;
  const anniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  return (
    <>
      <div className="card">
        <div><img src={`https://robohash.org/${id}?set=set5`} alt="Employee Picture" /></div>
        
        <div className="content">
          <p className="empName">
            {name} {promoRole && <span>⭐</span>}
          </p>
          <p>{role} 
            {promoRole && <span> - Team Lead</span>}
          </p>
          
          <div className='subtle'>
            <p>Department: {department}</p>
            <p>Been here for
                {yearsWorked < 1 && <span> few months</span>}
                {yearsWorked > 1 && <span> {yearsWorked} years</span>}
            </p>
            <p>Based in: {location}</p>
            <p>Animal: {animal}</p>
          </div>
          
          <Button 
            onClick={() => setPromoRole((prevState) => !prevState)}
            text={promoRole ? "Demote" : "Promote"}
            role={promoRole ? "secondary" : "primary"}
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
      </div>
    </>
  );
};

export default EmployeeCard;