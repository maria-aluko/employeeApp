import './EmployeeList.css'
import EmployeeCard from './EmployeeCard';


function EmployeeList(props) {
  return (
      <div className="listStyle">
        <h2>I am the list</h2>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
      </div>
  )
}

export default EmployeeList;