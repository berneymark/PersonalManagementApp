import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="parentContainer">
      <div className="sideBar">
        <div className="toolBar">
          <div className="searchBar"></div>
          <button className="createNoteButton"></button>
        </div>
        <div className="sideBarContent">
          <div className="todayMenu"></div>
          <div className="projectMenu"></div>
        </div>
      </div>
      <div className="notesView">

      </div>
    </div>
  );
}

export default App;
