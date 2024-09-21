import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmailScreen from './components/EmailScreen';
import FieldModal from './components/FieldModal';
import WelcomeSetting from './components/WelcomeSetting';
import EmailSetting from './components/EmailSettings';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Content');
  const [selectedField, setSelectedField] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleFieldClick = (field) => {
    setSelectedField(field);
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
    setSelectedField(null);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="navbar">
          <button className={`tab ${activeTab === 'Content' ? 'active' : ''}`} onClick={() => setActiveTab('Content')}>Content</button>
          <button className="tab">Design</button>
          <button className="tab">Share</button>
          <button className="tab">Replies</button>
        </div>

        <h3>Steps</h3>
        <ul className="steps">
          <li>
            <button className="step-btn" onClick={() => handleFieldClick('welcome')}>Welcome screen</button>
          </li>
          <li>
            <button className="step-btn" onClick={() => handleFieldClick('email')}>Enter your email</button>
          </li>
        </ul>
        <button onClick={openModal} className="add-field-btn">+ Add field</button>
        <button className="end-screen-btn">End screen</button>

      
        <div className="sidebar-footer">
          <button className="save-btn">Save & Publish</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>

      
      <div className="main-content">
        {!selectedField && <WelcomeScreen />} 
        {selectedField === 'welcome' && <WelcomeScreen />}
        {selectedField === 'email' && <EmailScreen />}
      </div>

      {settingsOpen && (
        <div className="settings-panel">
            
          {selectedField === 'welcome' ? <WelcomeSetting onClose={closeSettings} /> : <EmailSetting onClose={closeSettings} />}
        </div>
      )}

      {modalOpen && <FieldModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
