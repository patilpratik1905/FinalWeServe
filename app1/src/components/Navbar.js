import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import api from '../axios'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleLogout = () => {
    // Perform logout logic (e.g., remove token)
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  return (
    <div><nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'lightblue', maxHeight: '50px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ backgroundColor: 'lightblue' }} to="/">WeServe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">HomePage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/volunteer ">volunteer</Link></li>
                <li><Link className="dropdown-item" to="/profile">profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav></div>
  )
}
