import React from 'react';
import { useParams } from 'react-router-dom';
import './reservedSpot.css';


function ReservedSpot() {
  const { spotNumber } = useParams();
  return (
    <div>
      <hr className="top-line" />
      <div className="header">
        <h1 className="title-prompt">Thank You For Reserving Spot #{spotNumber}!</h1>
        <img className="logo" src="checkmark.png" alt="Checkmark" />
      </div>
      <p className="timeleft-prompt">
        You'll have 10 minutes to confirm your reserved parking space.
      </p>
      <p id="timer">10:00</p>
      <a href="#" className="Back-btn">
        Go Back
      </a>
      <a href="#" className="Confirm-btn">
        Confirm Spot
      </a>
      <hr className="bottom-line" />
    </div>
  );
}

export default ReservedSpot;