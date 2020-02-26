import React from 'react';
import './App.css';
import DesktopMenu from './Components/DesktopMenu';
import MobileMenu from './Components/MobileMenu';

function App() {
  return (
    <div className="App">
      <DesktopMenu></DesktopMenu>
      <MobileMenu></MobileMenu>
    </div>
  );
}

export default App;
