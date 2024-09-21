import React, { useState } from 'react';
import '../App.css';

function EmailSetting({ onClose }) {
  const [title, setTitle] = useState('Enter your email');
  const [description, setDescription] = useState('This will be used to contact you for the next steps');
  const [required, setRequired] = useState(true);

  const handleSave = () => {
    onClose();
  };

  return (
    <div className="email-settings-panel">
      <div className="header">
        <h3>Email</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="settings-content">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="textarea-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group toggle-group">
          <label htmlFor="required">Required</label>
          <div className="toggle-switch">
            <input
              id="required"
              type="checkbox"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
            <span className="slider round"></span>
          </div>
        </div>
        <div className="button-group">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="discard-btn" onClick={onClose}>Discard</button>
        </div>
      </div>
    </div>
  );
}

export default EmailSetting;
