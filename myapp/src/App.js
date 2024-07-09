// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App">
      <h1>Material UI Theme Switcher</h1>
      <Button variant="contained" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
      <div>
        <Button variant="contained">Start</Button>
      </div>
    </div>
  );
}

export default App;
