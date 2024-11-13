import './EmployeeList.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import employees from '../EmployeesData/EmployeesData';

const EmployeeList = () => {
  return (
    // use the spread operator to get all the object keys
    <div className="list">
       {employees.map((employee) => {
          return <EmployeeCard key = {employee.id} {...employee}/>
            })}
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