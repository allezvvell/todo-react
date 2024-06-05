import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    const isDark = localStorage.theme === 'dark';
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);
  return (
    <>
      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        moonColor="white"
        sunColor="white"
      />
    </>
  );
}
