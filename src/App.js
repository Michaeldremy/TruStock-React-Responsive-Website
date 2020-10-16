import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
