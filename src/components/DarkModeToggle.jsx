import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
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
