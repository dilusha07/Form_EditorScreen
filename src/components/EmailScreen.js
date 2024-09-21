import React, { useState } from 'react';
import '../App.css';

function EmailScreen({ field, onUpdate }) {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    setEmailValid(regex.test(email));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
    onUpdate({ ...field, value: e.target.value });
  };

  return (
    <div className="email-screen">
      <h2>Enter your email</h2>
      <p>This will be used to contact you for the next steps.</p>
      <input type="email" placeholder="Type here..." className="email-input"  value={email}
        onChange={handleEmailChange}/>
       {!emailValid && <span className="error">Invalid email</span>}
    </div>
  );
};


export default EmailScreen;
