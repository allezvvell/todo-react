import React from 'react';
import Tab from './components/Header/Tab';
import DarkModeToggle from './components/Header/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-green flex justify-between px-6 py-4">
      <Tab />
      <DarkModeToggle />
    </header>
  );
}
