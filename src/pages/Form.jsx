import { useState } from "react";
import './Form.css'

const Form = ({id, name, role, department, startDate, location, age, animal}) => {

  const [formData, setFormData] = useState({
    id,
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

  /*
  const submitData = () => {
    return (
      console.log(formData)
    )
  }
  */

  return (
    <div>
      <h2>Add a New Employee</h2>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="John Doe"
        />
        <label htmlFor="role">Role: </label>
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          type="text"
          placeholder="Web Designer"
        />
        <label htmlFor="department">Department: </label>
        <input
          name="department"
          value={formData.department}
          onChange={handleChange}
          type="text"
          placeholder="ICT"
        />
        <label htmlFor="startDate">Start of Employment: </label>
        <input
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          type="date"
        />
        <label htmlFor="location">Based in: </label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          type="text"
          placeholder="Helsinki"
        />
        <label htmlFor="age">Employee Age: </label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          placeholder="33"
        />
        <label htmlFor="animal">Favorite Animal: </label>
         <input
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          type="text"
          placeholder="Dog"
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  )
};

export default Form;