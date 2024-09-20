import React, { useState } from 'react';
import '../App.css';
import FieldModal from './FieldModal';

function Sidebar({ fields }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sidebar">
      <h3>Steps</h3>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            {field.type === 'welcome' ? 'Welcome screen' : 'Email field'}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>+ Add field</button>

      {showModal && <FieldModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Sidebar;
