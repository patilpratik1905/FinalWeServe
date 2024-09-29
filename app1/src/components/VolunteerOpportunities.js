// src/components/VolunteerOpportunities.js
import React from 'react';
import '../css/VolunteerOpportunities.css';
const VolunteerOpportunities = () => {
  return (
    <div className="volunteer-opportunities" style={{ marginTop: '70px' }}>
      <h2>Volunteer Opportunities</h2>
      {/* Opportunity List */}
      {/* This will be dynamically generated in a real application */}
      <ul>
        <li>Date: 2024-10-01, Task: Food Distribution, Location: Community Center</li>
        {/* More opportunities can be listed here */}
      </ul>

      {/* Sign-up Form */}
      <form className="sign-up-form" >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="date" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default VolunteerOpportunities;