import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './pages/Home';
import Bio from './pages/BioSkills';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path='/' component = {Home} />
          <Route exact path ='/bio' component = {Bio} />
          <Route exact path = '/resume' component = {Resume} />
          <Route exact path = '/projects' component = {Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
