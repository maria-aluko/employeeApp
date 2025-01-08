import { useState } from "react";
import axios from "axios";
import employees from "../components/EmployeesData/EmployeesData";
import Button from "../components/Button/Button";
import styles from './Form.module.css';

const Form = ({id, name, role, department, startDate, location, age, animal, email, phone}) => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generateId = () => {
    let id;
    const usedId = employees.map(employee => employee.id);
    do {
      id = Math.floor(Math.random() * 100);
    } while (usedId.includes(id));
    return id;
  };

  const defaultFormData = {
    id: String(generateId()),
    name,
    role,
    department,
    startDate,
    location,
    age,
    animal,
    email,
    phone,
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  };

  const addEmployee = (newEmployee) => {
    axios
      .post("https://employeeapp-data.onrender.com/employees", newEmployee)
      .then((response) => {
        setPersons((response.data));
        setIsLoading(false);
        setSuccessMessage('Employee added successfully!');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        setFormData(defaultFormData);
      })
      .catch((error) => {
        setSuccessMessage('Failed to add employee. Try again.');
        setTimeout(() => setSuccessMessage(''), 3000);
        setIsLoading(false);
      });
  }

  const createEmployee = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: String(generateId()),
      name: formData.name,
      role: formData.role,
      department: formData.department,
      startDate: formData.startDate,
      location: formData.location,
      age: formData.age,
      animal: formData.animal,
      email: formData.email,
      phone: formData.phone
    };
    setIsLoading(true);
    addEmployee(newEmployee);
  };

  return (
    <div>
      <h2>Add a New Employee</h2>
      {successMessage && (
        <div className={styles.successMessage}>
          <p>{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form
        onChange={handleChange}
        onSubmit={createEmployee}
        className={styles.formContainer}
      >
        <label htmlFor="name">Full Name: </label>
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="John Doe"
          required
        />
        <label htmlFor="role">Role: </label>
        <input
          name="role"
          value={formData.role}
          type="text"
          placeholder="Web Designer"
          required
        />
        <label htmlFor="department">Department: </label>
        <input
          name="department"
          value={formData.department}
          type="text"
          placeholder="ICT"
          required
        />
        <label htmlFor="startDate">Start of Employment: </label>
        <input
          name="startDate"
          value={formData.startDate}
          type="date"
          required
        />

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          value={formData.email}
          type="text"
          placeholder="example@example.com"
          required
        />
        <label htmlFor="phone">Phone number: </label>
        <input
          name="phone"
          value={formData.phone}
          type="text"
          placeholder="Enter in format +358 123 456 789"
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
        <Button 
          role='formButton'
          text={'Add Employee'}
          type='submit'
        >
          Add New </Button>
      </form>
      )}
    </div>
  )
};

export default Form;