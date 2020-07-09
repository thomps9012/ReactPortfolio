import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './components/pages/Home';
import Bio from './components/pages/BioSkills';
import Contact from './components/pages/ContactResume';
import Projects from './components/pages/Projects';
import Navbar from './components/js/Navbar';
import Wrapper from './components/js/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path='/' component = {Home} />
          <Route exact path ='/bio' component = {Bio} />
          <Route exact path = '/contact' component = {Contact} />
          <Route exact path = '/projects' component = {Projects} />
        </Wrapper>
      </div>
    </Router>
    
  );
}

export default App;
