import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';
import "../styles/Bio.css";

class Bio extends Component {
    state = {  }
    render() {
        return (<div className='Bio'>
        <h1><Fade bottom cascade>Bio</Fade></h1>
        <Fade bottom>
                <p>{data.abouttext}</p>
        </Fade>       
            </div>);
    }

}
export default Bio;