import './EmployeeCard.css';
import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.initRole);

  const clickHandler = () => {
      if (role === "Team Lead") {
          setRole(props.initRole);
      } else {
          setRole("Team Lead");
      }
  };

  return (
      <div className="card">
          <p>Name: {props.name}</p>
          <p>Role: {role}</p>
          <p>Department: {props.department}</p>
          <button onClick={clickHandler}>Promote</button>
      </div>
  );
};

export default EmployeeCard;