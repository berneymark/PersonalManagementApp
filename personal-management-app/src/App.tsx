import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Notes</h1>
        <input 
          className="searchBar"
          type="text"
          value="Search"/>
      </header>
      <div className="buttons">
        <h2>All</h2>
        <h2>Pinned</h2>
        <h2>Collections</h2>
      </div>
      <div className="notes">

      </div>
    </div>
  );
}

export default App;
