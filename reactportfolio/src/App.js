import React from 'react';
import './App.css';

import Header from './components/js/Header';
import Bio from './components/js/Bio';
import Contact from './components/js/Contact';
import Navbar from './components/js/Navbar';
import Skills from './components/js/Skills';
import Work from './components/js/Work';

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
