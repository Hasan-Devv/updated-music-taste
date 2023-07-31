// UserRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

const UserRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const [registrationError, setregistrationError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // console.log(data.message); Display response message in the console

      if (response.ok) {
        // Redirect to the success page after successful registration
        navigate('/userDataform');
        
      }else {
        const data = await response.json();
        const message = data.message;
        setregistrationError(message)

      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
        {registrationError && <p style={{color: "red"}}>{registrationError
        }</p>}
      </form>
    </div>
  );
};

export default UserRegistration;
