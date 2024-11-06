import './EmployeeList.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const EmployeeList = () => {
  return (
    <div className="list">
      <EmployeeCard name="Maria" initRole="student" department="ICT" salary="3000" startDate="01.09.2024"/>
      <EmployeeCard name="Samuel" initRole="admin" department="admin" salary="5000" startDate="01.07.2023"/>
      <EmployeeCard name="Debora" initRole="student" department="ICT" salary="3000" startDate="01.05.2022"/>
      <EmployeeCard name="Marit" initRole="teacher" department="ICT" salary="6000" startDate="01.04.2021"/>
      <EmployeeCard name="Merit" initRole="teacher" department="ICT" salary="6000" startDate="01.01.2020"/>
    </div>
  );
};

export default EmployeeList;