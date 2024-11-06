import './EmployeeList.css'
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  return (
    <div className="list">
      <EmployeeCard name="Maria" initRole="student" department="ICT" />
      <EmployeeCard name="Samuel" initRole="admin" department="admin" />
      <EmployeeCard name="Debora" initRole="student" department="ICT" />
      <EmployeeCard name="Santosh" initRole="teacher" department="ICT" />
      <EmployeeCard name="Margit" initRole="teacher" department="ICT" />
    </div>
  );
};

export default EmployeeList;