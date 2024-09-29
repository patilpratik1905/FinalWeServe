// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Signup = () => {
//   const [role, setRole] = useState('');

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle signup logic here
//     console.log('Sign up form submitted with role:', role);
//   };

//   return (
//     <div className="container" style={{marginTop:"70px"}}>
//       <form onSubmit={handleSubmit}>
//         {/* Other fields like username and password */}

//         <div className="mb-3" style={{marginTop:"50px"}}>
//           <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
//           <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" />
//         </div>

//         {/* New Roles Dropdown */}
//         <div className="mb-3" >
//           <label htmlFor="roleSelect" className="form-label">Roles</label>
//           <select id="roleSelect" className="form-select" value={role} onChange={handleRoleChange}>
//             <option value="">Select a role</option>
//             <option value="Donor">Donor</option>
//             <option value="NGO">NGO</option>
//             <option value="Volunteer">Volunteer</option>
//           </select>
//         </div>

//         <button type="submit" className="btn btn-primary">Sign Up</button>
//       </form>
//       <p className="mt-3">
//         Already have an account? <Link to="/signin">Sign in here</Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../axios'

export const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can replace this URL with your backend endpoint


    try {
      console.log('Form Data:', formData);
      const response = await api.post('/createuser', formData);
      console.log('Sign up successful:', response.data);
    } catch (error) {
      // Log the full error object
      console.error('Error signing up:', error);

      // Log specific parts of the error
      if (error.response) {
        console.log('Server responded with a status code:', error.response.status);
        console.log('Response data:', error.response.data);
        console.log('Response headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request made but no response received:', error.request);
      } else {
        console.log('Error setting up request:', error.message);
      }
    }

  }
    return (
      <div className="container" style={{ marginTop: "70px" }}>
        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="mb-3" style={{ marginTop: "50px" }}>
            <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername1"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Roles dropdown */}
          <div className="mb-3">
            <label htmlFor="roleSelect" className="form-label">Roles</label>
            <select
              id="roleSelect"
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="Donor">Donor</option>
              <option value="NGO">NGO</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

        <p className="mt-3">
          Already have an account? <Link to="/signin">Sign in here</Link>
        </p>
      </div>
    );
  };

  export default Signup
