import React from 'react';
import SideBar from './components/sidebar/SideBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="parentContainer">
      <div className="sideBar">
        <SideBar/>
      </div>
      <div className="notesView">

      </div>
    </div>
  );
}

export default App;
