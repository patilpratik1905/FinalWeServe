// src/components/HomePage.js
import React from 'react';
import '../css/HomePage.css';
import { Carousol } from './Carousel';
import cardImg1 from './card_img_1.jpg'; // Import the image here
import cardImg2 from './card_img_2.jpg';
import cardImg3 from './card_img_3.jpg';


const HomePage = () => {

  return (
    
    <div className="hero-section " style={{margin:"80px"}}> 
    <Carousol />

      <h1>Join the Movement Against Food Waste</h1>
      <p>Donate, Volunteer, or Receive Food with FoodConnect</p>
      <div className="dashboard-cards">
        {/* Donor Card */}
        <div className="card my-3">
        <img src={cardImg1} className="card-img-top" alt="..."/>
          <h3>Donor</h3>
          <button>Donate Food</button>
          <button>View Past Donations</button>
        </div>

        {/* Volunteer Card */}
        <div className="card my-3" >
        <img src={cardImg2} className="card-img-top" alt="..."/>
          <h3>Volunteer</h3>
          <button>Upcoming Opportunities</button>
          <button>Hours Logged</button>
        </div>

        {/* Recipient Card */}
        <div className="card my-3">
        <img src={cardImg3} className="card-img-top" alt="..."/>
          <h3>NGO's</h3>
          <button>Available Food</button>
          <button>Pickup Schedule</button>
        </div>
      </div>

    </div>
    
  );
};

export default HomePage;