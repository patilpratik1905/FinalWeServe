// src/components/Profile.js
import React from 'react';
import '../css/Profile.css';


const Profile = () => {
  return (
    <div className="profile" style={{ marginTop: '50px' }}>
      <h2>Your Profile</h2>
      {/* Profile Information */}
      {/* This would be populated dynamically in a real application */}
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>

      {/* Edit Profile Button */}
      <button>Edit Profile</button>

      {/* Food Request Form for Recipients */}
      <form className="food-request-form">
        <input type="text" placeholder="Food Type" required />
        <input type="number" placeholder="Quantity" required />
        <input type="text" placeholder="Preferred Pickup Location" required />
        <button type="submit">Request Food</button>
      </form>
    </div>
  );
};

export default Profile;