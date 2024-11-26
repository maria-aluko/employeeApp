import { useState } from "react";
import employees from "../components/EmployeesData/EmployeesData";
import './Form.css';

const Form = ({id, name, role, department, startDate, location, age, animal}) => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Add a New Employee</h2>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
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
        <button type="submit">Add New</button>
      </form>
    </div>
  )
};

export default Form;