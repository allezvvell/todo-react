import React, { useContext } from 'react';
import Tab from './components/Tab';
import DarkModeToggle from './components/DarkModeToggle';
import { DarkModeContext } from './context/DarkModeContext';

export default function Header() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header
      className={`flex justify-between px-6 py-4 ${
        darkMode ? 'bg-green' : 'bg-green'
      }`}
    >
      <Tab />
      <DarkModeToggle />
    </header>
  );
}
