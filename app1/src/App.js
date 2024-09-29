// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Dashboard from './components/Dashboard.js';
import VolunteerOpportunities from './components/VolunteerOpportunities';
import Profile from './components/Profile';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard_donor from './components/Dashboard_donar.js';


function App() {
  return (
      <>
    <Router>
      <div className="App">
      <Navbar />
      </div>
    <div className="container">
        <Routes>
          
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/volunteer" element={<VolunteerOpportunities/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/donar" element={<Dashboard_donor/>} />



        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;