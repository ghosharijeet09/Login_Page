import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', address: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => {
      setForm({
        firstName: res.data.first_name,
        lastName: res.data.last_name,
        dob: res.data.dob,
        address: res.data.address,
      });
    }).catch(() => alert("Failed to load profile"));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.put("http://localhost:5000/api/profile", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(() => {
      alert("Profile updated!");
      navigate("/profile");
    }).catch(() => alert("Update failed"));
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h2 className="text-center mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Address"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;