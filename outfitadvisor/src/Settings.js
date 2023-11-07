import React, { useState } from 'react';
import './Settings.scss';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Settings</h2>
      <div id="setters">
      <label htmlFor="dark-mode-button">Toggle Dark Mode</label>
      <input
        name="dark-mode-button"
        type="checkbox"
        className="toggle-dark-mode"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      </div>

      <p>coming soon</p>
    </div>
  );
};

export default Settings;
