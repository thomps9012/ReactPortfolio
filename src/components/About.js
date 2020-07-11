import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class About extends Component {
    state = {}
    render() {
        return (
            <div className='about'>
                <h1><Fade bottom cascade>About:</Fade></h1>
                <Fade bottom>
                    <p>{data.abouttext}</p>
                </Fade>
                <br></br>
                <h2><Fade bottom cascade>Languages:</Fade></h2>
                <Fade bottom>
                    <p>{data.languages}</p>
                </Fade>
                <br></br>
                <h2><Fade bottom cascade>Frameworks:</Fade></h2>
                <Fade bottom>
                    <p>{data.frameworks}</p>
                </Fade>
                
            </div>
        );
    }
}

export default About;