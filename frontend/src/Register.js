import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', dob: '', address: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', form);
      alert('Registration successful');
      navigate('/');
    } catch (err) {
      alert('Error: ' + err.response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        
        {["firstName", "lastName", "email", "dob", "address", "password"].map(key => (
          <div className="mb-3" key={key}>
            <input
              type={key === "dob" ? "date" : key === "password" ? "password" : "text"}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={form[key]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        
        <button type="submit" className="btn btn-primary w-100">Register</button>
        
        <p className="mt-3 text-center">
          <span>Already have an account?</span>
          <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => navigate("/")}> Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;