import React from 'react';
import './App.css';

import Header from './components/Header';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
        <Header></Header>
      </div>
    <div className="Bio">
      <Bio></Bio>
    </div>
    <div className="Skills">
      <Skills></Skills>
    </div>
    <div className="Work">
      <Work></Work>
    </div>
    <div className="Contact">
      <Contact></Contact>
    </div>
    </div>
  );
}

export default App;
