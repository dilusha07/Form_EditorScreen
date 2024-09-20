import React from 'react';
import '../App.css';

const EmailScreen = () => {
  return (
    <div className="email-screen">
      <h2>Enter your email</h2>
      <p>This will be used to contact you for the next steps.</p>
      <input type="email" placeholder="Type here..." className="email-input" />
    </div>
  );
};

export default EmailScreen;
