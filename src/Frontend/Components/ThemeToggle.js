import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.body.classList.toggle('dark-mode', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`switch ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="icon-text-container">
          {isDarkMode ? (
            <>
              <span className="text">Dark</span>
              <FontAwesomeIcon icon={faMoon} className="icon moon-icon" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} className="icon sun-icon" />
              <span className="text">Light</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
