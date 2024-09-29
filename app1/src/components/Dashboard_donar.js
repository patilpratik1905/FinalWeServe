import React from 'react'
import { useNavigate } from 'react-router-dom';


const Dashboard_donor = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleSubmit = (event) => {
      event.preventDefault();
      // Sign in logic goes here
      console.log('Sign in form submitted');
      
      // After successful sign-in, navigate to another page, e.g., a dashboard or home page
      navigate('/signin'); // Example of programmatically navigating to /dashboard after sign in
    };
  return (
    <div className="container" style={{marginTop:"70px"}}>
    <button className="cta-button" onClick={handleSubmit}>Donate Food</button>
    </div>
  )
}

export default Dashboard_donor