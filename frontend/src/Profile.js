import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setProfile(res.data))
      .catch(err => alert("Failed to fetch profile"));
  }, []);

  return (
    <div className="container mt-5">
      <Navbar />
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Profile Details</h2>
        {profile ? (
          <ul className="list-group">
            <li className="list-group-item">
              <strong>First Name:</strong> {profile.first_name}
            </li>
            <li className="list-group-item">
              <strong>Last Name:</strong> {profile.last_name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {profile.email}
            </li>
            <li className="list-group-item">
              <strong>Date of Birth:</strong> {new Date(profile.dob).toLocaleDateString()}

              
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> {profile.address}
            </li>
          </ul>
        ) : (
          <p className="text-center">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;