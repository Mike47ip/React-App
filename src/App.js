// src/App.js
import React from 'react';
import './App.css';
import SpaceXMissions from './components/SpaceXMissions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Missions App</h1>
        <SpaceXMissions />
      </header>
    </div>
  );
}

export default App;
