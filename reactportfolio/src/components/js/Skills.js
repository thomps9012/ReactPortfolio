import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';
import "../styles/Skills.css";

class Skills extends Component {
    state = {  }
    render() {
        return (<div className='Skills'>
        <h1><Fade bottom cascade>Skills</Fade></h1>
        <Fade bottom>
                <p>{data.frameworks}</p>
        </Fade>
        <Fade bottom>
                <p>{data.languages}</p>    
        </Fade>       
            </div>);
    }

}
export default Skills;