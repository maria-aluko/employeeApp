import './EmployeeCard.css';
import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.initRole);

  const clickHandler = () => {
      if (role === "Team Leader") {
          setRole(props.initRole);
      } else {
          setRole("Team Leader");
      }
  };

  return (
      <div className="card">
          <p>Name: {props.name}</p>
          <p>Role: {props.role}</p>
          <p>Department: {props.department}</p>
          <p>Start Date: {props.startDate}</p>
          <p>Location: {props.location}</p>
          <p>Age: {props.age}</p>
          <p>Animal: {props.animal}</p>
          <button onClick={clickHandler}>Promote</button>
      </div>
  );
};

export default EmployeeCard;