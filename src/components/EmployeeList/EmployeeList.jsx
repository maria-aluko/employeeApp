import './EmployeeList.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import teachers from '../EmployeesData/EmployeesData';

const EmployeeList = () => {
  return (
    <div className="list">
        {teachers.map((teacher) => {
          return <EmployeeCard
            name={teacher.name}
            role={teacher.role}
            department={teacher.department}
            startDate={teacher.startDate}
            location={teacher.location}
            age={teacher.age}
            animal={teacher.animal}
            key={teacher.id}
            />
        })
      }
    </div>
  );
};

export default EmployeeList;