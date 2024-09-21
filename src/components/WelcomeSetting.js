import React, { useState } from 'react';
import '../App.css';

function WelcomeSetting({ onClose }) {
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is a description of the form');
  const [placeholder, setPlaceholder] = useState('Start');
  const [colors, setColors] = useState(['#D7A9E3', '#1D1F20', '#A8D080']); 
  const handleSave = () => {
    onClose();
  };

  return (
    <div className="welcome-settings-panel">
      <div className="header">
        <h3>Settings</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="settings-content">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="placeholder">Placeholder</label>
          <input
            id="placeholder"
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Upload</label>
          <button className="upload-btn">Upload</button>
        </div>

       
        <div className="color-section">
          {colors.map((color, index) => (
            <div key={index} className="color-box" style={{ backgroundColor: color }}></div>
          ))}
        </div>

      
        <div className="button-group">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="discard-btn" onClick={onClose}>Discard</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSetting;
