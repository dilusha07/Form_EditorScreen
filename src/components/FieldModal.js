import React from 'react';
import '../App.css';

const FieldModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>X</button>
        <h3>Add Field</h3>
        <div className="field-options">
          <div className="field-option">
            <span>✔</span> Multiple Choice
          </div>
          <div className="field-option">
            <span>✏️</span> Short Text
          </div>
          <div className="field-option">
            <span>✉️</span> Email
          </div>
          <div className="field-option">
            <span>🔽</span> Dropdown
          </div>
          <div className="field-option">
            <span>📞</span> Phone Number
          </div>
          <div className="field-option">
            <span>📑</span> Section
          </div>
          <div className="field-option">
            <span>🌐</span> Country
          </div>
          <div className="field-option">
            <span>ℹ️</span> Contact Information
          </div>
          <div className="field-option">
            <span>📝</span> Legal
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldModal;
