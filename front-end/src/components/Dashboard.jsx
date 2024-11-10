// Dashboard.jsx
import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap'; // You can use any UI library you prefer
import axiosInstance from '../../axiosinterceptors';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null); // Handle errors

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both users and doctors data in parallel
        const [usersResponse, doctorsResponse] = await Promise.all([
          axiosInstance.get('http://localhost:5000/user'),
          axiosInstance.get('http://localhost:5000/doctor'),
        ]);
        setUsers(usersResponse.data); // Set the users data
        setDoctors(doctorsResponse.data); // Set the doctors data
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load users or doctors data. Please try again later.');
      }
    };

    fetchData();
  }, []); // Empty dependency array so it runs once when the component mounts

  // Redirect to user or doctor profile page
  const handleProfileRedirect = (id, role) => {
    if (role === 'doctor') {
      window.location.href = `/doctor/${id}`; // Navigate to doctor profile
    } else {
      window.location.href = `/user/${id}`; // Navigate to user profile
    }
  };

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>

      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}

      {/* Users Section */}
      <h2>Users</h2>
      <ul>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <Button onClick={() => handleProfileRedirect(user.id, 'user')} variant="info">
                View Profile
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Doctors Section */}
      <h2>Doctors</h2>
      <ul>
        {doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          doctors.map((doctor) => (
            <li key={doctor.id}>
              <span>{doctor.name}</span>
              <Button onClick={() => handleProfileRedirect(doctor.id, 'doctor')} variant="info">
                View Profile
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;

