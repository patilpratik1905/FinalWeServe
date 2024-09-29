import React, { useEffect, useState } from 'react';
import api from 'axios';
import '../css/Dashboard.css';
// import api from '../axios'
import { Link } from 'react-router-dom';
import DonorDashboard from './DonorDashboard';
import NGODashboard from './NGODashboard';
import VolunteerDashboard from './VolunteerDashboard';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>No user data available</div>;

  return (
    <div className="dashboard" style={{ marginTop: "50px" }}>
      <h2>Your Dashboard</h2>
      <h3>Welcome, {userData.username}!</h3>
      <h4>Your Role: {userData.role}</h4>
      {/* Navigation Bar */}

      {userData.role === 'donor' && <DonorDashboard />}
      {userData.role === 'volunteer' && <VolunteerDashboard />}
      {userData.role === 'ngo' && <NGODashboard />}

    </div>
  );
};

export default Dashboard;