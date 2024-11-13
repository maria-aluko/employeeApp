import './EmployeeCard.css';
import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.role);

  const clickHandler = () => {
      if (role === "Team Leader") {
          setRole(props.role);
      } else {
          setRole("Team Leader");
      }
  };

  const startDate = new Date(props.startDate);
  const currentDate = new Date();
  const yearsWorked = currentDate.getFullYear() - startDate.getFullYear();
  const promotion = 
    yearsWorked == 5 || yearsWorked == 10 || yearsWorked == 15 ? <img className="promotion" src="src/assets/celebratioon.png"/> : '';
  const promoText = 
    yearsWorked == 5 || yearsWorked == 10 || yearsWorked == 15 ? 'Schedule recognition meeting' : '';

  const newbie = 
    yearsWorked < 1 ? <img className="promotion" src='src/assets/notification.png'></img> : '';

    const newbieText = 
    yearsWorked < 1 ? 'Schedule probation review' : '';

  return (
    <>
      <div className="card">
        <div><img src="src/assets/FSV.png" alt="Teacher Picture" /></div>
        <div className='content'>
          <p className="teacherName">
            {props.name}
            {role === "Team Leader" && <span> ⭐</span>}
            </p>
          <p>{role}</p>
          <div className='subtle'>
            <p>Department: {props.department}</p>
            <p>Been here for
                {yearsWorked < 1 && <span> few months</span>}
                {yearsWorked > 1 && <span> {yearsWorked} years</span>}
            </p>
            <p>From: {props.location}</p>
            <p>Age: {props.age}</p>
            <p>Animal: {props.animal}</p>
          </div>
          <button onClick={clickHandler}>{role === "Team Leader" && <span>Demote</span>}{role != "Team Leader" && <span>Promote</span>}</button>
          <p className='promo'>{promotion}{promoText}</p>
          <p className='promo'>{newbie}{newbieText}</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;