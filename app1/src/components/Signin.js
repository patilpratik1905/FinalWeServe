import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../axios';

export const Signin = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // State for storing username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the backend for login
      const response = await api.post('/login', {
        username,
        password,
      });

      // Assuming the response contains a token or user data
      console.log('Sign in successful:', response.data);

      // Store the token in localStorage or sessionStorage if needed
      localStorage.setItem('token', response.data.token);

      // Navigate to another page after successful sign-in
      navigate('/'); // Example of programmatically navigating to /
    } catch (error) {
      console.error('Sign in error:', error.response?.data || error.message);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ marginTop: "70px" }}>
          <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputUsername1" 
            aria-describedby="usernameHelp" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Store input value
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Store input value
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Signin;
