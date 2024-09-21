import React from 'react';
import '../App.css';

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <h1>Welcome to our form</h1>
      <p>This is a description of the form</p>
      <button className="start-btn">Start</button>
      
     
      <div className="color-labels">
        <div className="color-label purple"></div>
        <div className="color-label black"></div>
        <div className="color-label green"></div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
