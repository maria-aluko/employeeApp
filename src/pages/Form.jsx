import { useState } from "react";
import axios from "axios";
import employees from "../components/EmployeesData/EmployeesData";
import './Form.css';

const Form = ({id, name, role, department, startDate, location, age, animal}) => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateId = () => {
    let id;
    const usedId = employees.map(employee => employee.id);
    do {
      id = Math.floor(Math.random() * 100);
    } while (usedId.includes(id));
    return id;
  };

  const [formData, setFormData] = useState({
    id: generateId(),
    name,
    role,
    department,
    startDate,
    location,
    age,
    animal,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  };

  const addEmployee = (newEmployee) => {
    axios
      .post("http://localhost:3001/employees", newEmployee)
      .then((response) => {
        setPersons((response.data));
        setIsLoading(true);
      })
  }

  const createEmployee = () => {
    const newEmployee = {
      id: generateId(),
      name: formData.name,
      role: formData.role,
      department: formData.department,
      startDate: formData.startDate,
      location: formData.location,
      age: formData.age,
      animal: formData.animal,
    };
    addEmployee(newEmployee);
  };

  return (
    <div>
      <h2>Add a New Employee</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form
        onChange={handleChange}
        onSubmit={createEmployee}
      >
        <label htmlFor="name">Full Name: </label>
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="John Doe"
        />
        <label htmlFor="role">Role: </label>
        <input
          name="role"
          value={formData.role}
          type="text"
          placeholder="Web Designer"
        />
        <label htmlFor="department">Department: </label>
        <input
          name="department"
          value={formData.department}
          type="text"
          placeholder="ICT"
        />
        <label htmlFor="startDate">Start of Employment: </label>
        <input
          name="startDate"
          value={formData.startDate}
          type="date"
        />
        <label htmlFor="location">Based in: </label>
        <input
          name="location"
          value={formData.location}
          type="text"
          placeholder="Helsinki"
        />
        <label htmlFor="age">Employee Age: </label>
        <input
          name="age"
          value={formData.age}
          type="number"
          placeholder="33"
        />
        <label htmlFor="animal">Favorite Animal: </label>
         <input
          name="animal"
          value={formData.animal}
          type="text"
          placeholder="Dog"
        />
        <button className="formButton" type="submit">Add New</button>
      </form>
      )}
    </div>
  )
};

export default Form;