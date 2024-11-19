import { useState } from "react";

const Form = ({role, department, location}) => {
  const [formData, setFormData] = useState({
    role,
    department,
    location,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({...prevState, [name]:value})) // curly brackets because it's an object
  }

  return (
    <div>
      <form>
        <input name="role" value={formData.role} onChange={handleChange} />
        <input name="department" value={formData.department} onChange={handleChange} />
        <input name="location" value={formData.location} onChange={handleChange} />
      </form>
    </div>
  )
};

export default Form;